import { describe, it, expect } from "vitest";
import { tryWord } from './motus.js';
describe('tryWord function', () => {})
  it('should return if letters are wellPlaced, missPlaced or notInWord', () => {
    expect(tryWord('dictionnaire')).toBe('wellPlaced');
    expect(tryWord('idctionnaih')).toBe('missPlaced');
    expect(tryWord('banane')).toBe('notInWord');
});