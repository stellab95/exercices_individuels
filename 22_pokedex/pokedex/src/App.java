  import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class App {
    public static void main(String[] args) throws Exception {

       URL url = new URL("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json");
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();

            //Check if connect is made
            int responseCode = conn.getResponseCode();

            // 200 OK
            if (responseCode != 200) {
                throw new RuntimeException("HttpResponseCode: " + responseCode);
            } else {

                StringBuilder informationString = new StringBuilder();
                Scanner scanner = new Scanner(url.openStream());

                while (scanner.hasNext()) {
                    informationString.append(scanner.nextLine());
                }
                //Close the scanner
                scanner.close();

                // System.out.println(informationString);

                //JSON simple library Setup with Maven is used to convert strings to JSON
                JSONParser parse = new JSONParser();
                JSONObject pokemon = (JSONObject) parse.parse(String.valueOf(informationString));
                JSONArray jsonArray = (JSONArray) pokemon.get("pokemon");                //Get the first JSON object in the JSON array
                System.out.println(jsonArray.get(0));
                pokemon bulbizarre = new pokemon(1, "Bulbasaur", 0.7, 6.9, "Ivysaur", "Venusaur");
                bulbizarre.show();
            }
    }
}

class pokemon {
    int id;
    String name;
    double height;
    double weight;
    String prevEvolution;
    String nextEvolution;

    public pokemon(int id, String name, double height, double weight, String prevEvolution, String nextEvolution) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.prevEvolution = prevEvolution;
        this.nextEvolution = nextEvolution;
    }

    public void show() {
        System.out.println(this.id + " " + this.name);
    }

    public void evolution(int id){
        System.out.println(this.name + this.prevEvolution);
        
    }
}

