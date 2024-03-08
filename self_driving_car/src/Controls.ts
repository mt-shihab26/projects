class Controls {
    forword: boolean;
    left: boolean;
    right: boolean;
    reverse: boolean;

    constructor() {
        this.forword = false;
        this.left = false;
        this.right = false;
        this.reverse = false;

        this.add_keyboard_listeners();
    }

    private add_keyboard_listeners(): void {
        document.onkeydown = e => {
            switch (e.key) {
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forword = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;

                case "h":
                    this.left = true;
                    break;
                case "l":
                    this.right = true;
                    break;
                case "k":
                    this.forword = true;
                    break;
                case "j":
                    this.reverse = true;
                    break;
            }
        };
        document.onkeyup = e => {
            switch (e.key) {
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forword = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;

                case "h":
                    this.left = false;
                    break;
                case "l":
                    this.right = false;
                    break;
                case "k":
                    this.forword = false;
                    break;
                case "j":
                    this.reverse = false;
                    break;
            }
        };
    }
}

export default Controls;
