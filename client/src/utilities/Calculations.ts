/**
 * @name timeCalculation
 * @description function that passes the time of integers in minutes and converts it to text to print on the screen in h:m format
 * @param runtime {number | null}
 * @returns textRunTime {string | null}
 */
export const timeToTextCalculation = (runtime: number | null) => {
    let runTimeH: number | null = null;
    let runTimeM: number | null = null;
    let textRunTime: string | null = null;

    if (runtime !== null) {
        if (runtime <= 60) {
            textRunTime = `${runtime}m`;
        } else if (runtime === 60) {
            textRunTime = `1h`;
        } else {
            runTimeH = Math.floor(runtime / 60);
            runTimeM = runtime - runTimeH * 60;
            textRunTime = `${runTimeH}h${runTimeM}m`;
        }
    }

    return textRunTime;
};
