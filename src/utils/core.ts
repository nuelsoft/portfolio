export const isMobile = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/i.test(
    window.navigator.userAgent
);

export const heightTimes = (h?: number): number => {
    return window.innerHeight * (h ?? 1);
}

export const widthTimes = (w?: number): number => {
    return window.innerWidth * (w ?? 1);
}