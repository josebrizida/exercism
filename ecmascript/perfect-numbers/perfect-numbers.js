class Gigasecond {
    constructor (date) {
        this.input = date
    }

    date () {
        return new Date(this.input.valueOf() + 1000000000000)
    }
}

export default Gigasecond