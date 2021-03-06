const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

new Vue ({
    el: '#app',
    data: {
        images: slides,
        currentImageIndex: 0,
        mouseOver: false,
        intervalSave: null,
        onLoadInterval: null
    },

    methods: {
        setNextImageIndex(imagesArray){
            if (this.currentImageIndex === imagesArray.length - 1){
                this.currentImageIndex = 0
            } else {
                this.currentImageIndex++
            }
        },

        setPreviousImageIndex(imagesArray){
            if (this.currentImageIndex === 0){
                this.currentImageIndex = imagesArray.length - 1
            } else {
                this.currentImageIndex--
            }
        },

        setActiveThumb(index){
            if (this.currentImageIndex === index){
                return 'active'
            }
        },

        setImgOnClick(index){
            this.currentImageIndex = index
        },

        hideButtons(){
            setTimeout(()=>{this.mouseOver = false}, 500)
        },

        showButtons(){
            this.mouseOver = true
        },

        addPlay(){
            this.intervalSave = setInterval(() => {
                if (this.currentImageIndex === this.images.length - 1){
                    this.currentImageIndex = 0
                } else {
                    this.currentImageIndex++
                }
            }, 3000)
        },

        removePlay(){
            clearInterval(this.intervalSave)
            clearInterval(this.onLoadInterval)
        }
    },

    mounted(){
        this.onLoadInterval = setInterval(() => {
            if (this.currentImageIndex === this.images.length - 1){
                this.currentImageIndex = 0
            } else {
                this.currentImageIndex++
            }
        }, 3000)
    }
    
})