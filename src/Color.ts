export abstract class Color {
    constructor(private color: string, private filled: boolean) { }

    getColor(): string {
        return this.color;
    }
    setColor(color: string): void {
        this.color = color;
    }

    fillShape(isfilled: boolean): void {
        this.filled = isfilled;
    }
    isfilled(): boolean {
        return this.filled;
    }
}