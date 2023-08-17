import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DbService {
	constructor() {}

	/**
	 * Method to save a key-value pair to the local storage.
	 * @param key - The key under which the value will be stored.
	 * @param value - The value to be stored.
	 */
	public save(key: string, value: string): void {
		try {
			// Attempt to save the key-value pair to the local storage
			localStorage.setItem(key, value);
		} catch (error) {
			// Log an error message if the operation fails
			console.error(
				`Failed to save value for key "${key}" to local storage.`,
				error
			);
		}
	}

	/**
	 * Method to load a value from the local storage by its key.
	 * @param key - The key of the value to be retrieved.
	 * @returns The value associated with the specified key, or null if the key does not exist.
	 */
	public load(key: string): string | null {
		try {
			// Attempt to retrieve the value associated with the specified key from the local storage
			return localStorage.getItem(key);
		} catch (error) {
			// Log an error message if the operation fails
			console.error(
				`Failed to load value for key "${key}" from local storage.`,
				error
			);
			return null;
		}
	}

	/**
	 * Method to remove a key-value pair from the local storage by its key.
	 * @param key - The key of the value to be removed.
	 */
	public remove(key: string): void {
		try {
			// Attempt to remove the key-value pair associated with the specified key from the local storage
			localStorage.removeItem(key);
		} catch (error) {
			// Log an error message if the operation fails
			console.error(
				`Failed to remove value for key "${key}" from local storage.`,
				error
			);
		}
	}

	/**
	 * Method to clear all key-value pairs from the local storage.
	 */
	public clear(): void {
		try {
			// Attempt to clear all key-value pairs from the local storage
			localStorage.clear();
		} catch (error) {
			// Log an error message if the operation fails
			console.error('Failed to clear local storage.', error);
		}
	}
}
