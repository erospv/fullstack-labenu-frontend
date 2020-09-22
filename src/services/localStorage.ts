export function setItemInLocalStorage(itemKey: string, item: string): void {
    localStorage.setItem(itemKey, item)
}

export function clearLocalStorage(): void {
    localStorage.clear()
}

export function getItemFromLocalStorage(itemKey: string): string | null {
    return localStorage.getItem(itemKey)
}