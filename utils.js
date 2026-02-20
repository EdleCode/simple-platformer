const DEV = true;

export async function fetchJSON(path) {
    const bust = DEV ? '?t=' + Date.now() : '';
    const response = await fetch(path + bust);
    if (!response.ok) throw new Error(`fetchJSON: can't load "${path}" (${response.status})`);
    return response.json();
}

