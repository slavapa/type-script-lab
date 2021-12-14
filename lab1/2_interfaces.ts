interface Rect{
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: "id1",
    size: {
        width: 10,
        height: 25
    }    
}

rect1.color = "Blue"

const rect2 = {} as Rect
const rect3 = <Rect> {}

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: "id2",
    size: {
        width: 25,
        height: 50
    },
    getArea(): number {
         return (this.size.width * this.size.height)
    }   
} 

interface IClock {
    time: Date,
    setTiem(date: Date): void
}

class MyClock implements IClock{
    time: Date = new Date();
    setTiem(date: Date): void {
        this.time = date;
    }
}

interface Styles{
    [key: string]: string
}

const css: Styles = {
    border: "1px solid red",
    borderRadius: "25%"
}