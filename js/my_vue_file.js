new Vue({
    el: '#app',
    template: `
        <div>
            <div class="file-upload-form">
                Upload an image file:
                <input type="file" @change="previewImage" accept="image/*">
            </div>
            <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
            </div>
        </div>
    `,
    data: {
        imageData: ""  //  base64 format 
    },
    methods: {
        previewImage: function(event) {
            // Referenca na DOM ulazni element
            var input = event.target;
            // Uverite se da imate fajl pre nego što pokušate da ga pročitate
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Definišite funkciju povratnog poziva za pokretanje, kada FileReader završi svoj posao
                reader.onload = (e) => {
                    // Napomena: ovde se koristi funkcija strelice, tako da se "this.imageData" odnosi na sliku Vue komponente
                    // Čitajte sliku kao base64 i postavite na imageData
                    this.imageData = e.target.result;
                }
                // Pokretanje zadatka čitača - pročitaj fajl kao URL adrese (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        }
    }
});
