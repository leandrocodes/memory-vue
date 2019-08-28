export default {
    data(){
        return{
            cards: [
                {
                    name: 'lupa', img: 'https://image.flaticon.com/icons/svg/1150/1150626.svg',
                    flipped: false, id: 12
                },
                {
                    name: 'comp', img: 'https://image.flaticon.com/icons/svg/1149/1149168.svg',
                    flipped: false, id: 1
                },
                {
                    name: 'config', img: 'https://image.flaticon.com/icons/svg/148/148909.svg',
                    flipped: false, id: 2
                },
                {
                    name: 'lupa', img: 'https://image.flaticon.com/icons/svg/1150/1150626.svg',
                    flipped: false, id: 3
                },
        
                {
                    name: 'comp', img: 'https://image.flaticon.com/icons/svg/1149/1149168.svg',
                    flipped: false, id: 4
                },
        
                {
                    name: 'config', img: 'https://image.flaticon.com/icons/svg/148/148909.svg',
                    flipped: false, id: 5
                },
        
                {
                    name: 'idea', img: 'https://image.flaticon.com/icons/svg/427/427735.svg',
                    flipped: false, id: 6
                },
        
                {
                    name: 'brain', img: 'https://image.flaticon.com/icons/svg/791/791072.svg',
                    flipped: false, id: 7
                },
        
                {
                    name: 'pencils', img: 'https://image.flaticon.com/icons/svg/1497/1497726.svg',
                    flipped: false, id: 8
                },
        
                {
                    name: 'idea', img: 'https://image.flaticon.com/icons/svg/427/427735.svg',
                    flipped: false, id: 9
                },
        
                {
                    name: 'brain', img: 'https://image.flaticon.com/icons/svg/791/791072.svg',
                    flipped: false, id: 10
                },
        
                {
                    name: 'pencils', img: 'https://image.flaticon.com/icons/svg/1497/1497726.svg',
                    flipped: false, id: 11
                }
            ],
        }
    },
    methods: {
        shuffleCards() {
            let array = this.cards
            let currentIndex = array.length, tempValue, randomIndex
        
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex)
                currentIndex -= 1
        
                tempValue = array[currentIndex]
                array[currentIndex] = array[randomIndex]
                array[randomIndex] = tempValue
            }
            console.log(array)
            return array
        }
    }
}