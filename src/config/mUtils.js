export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

export const setStore = (key, value) => {
    if (!value) return;
    if (typeof value !== "string") {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
};