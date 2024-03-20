const { createApp } = Vue
createApp({
    data() {
        return {
            api_url: "https://flynn.boolean.careers/exercises/api/random/mail",
            mail: null,
            mailList: [],
            error: null,


        }
    },
    methods: {
        generateList() {
            for (let i = 0; i < 10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then(response => {

                        console.log(response);
                        this.mailList.push(response.data.response);
                    })
                    .catch(error => {
                        console.log(error);
                        this.error = error
                    })

            }
        },
        deleteAll() {
            location.reload();
        }
    },
    mounted() {
        axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {

                console.log(response);


            });




    }


}).mount('#app')