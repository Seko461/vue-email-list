const { createApp } = Vue
createApp({
    data() {
        return {
            mail: null,
            mailList: [],


        }
    },
    methods: {
        generateMails() {

            for (let i = 0; i < 10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((response) => {

                        console.log(response.data.response);
                        this.mail = response.data.response


                        this.mailList.push(this.mail)

                    });

            }

            console.log(this.mailList);

        },
        async generateMails() {


            for (let i = 0; i < 10; i++) {
                const response = await axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                this.mailList.push(response.data.response)
            }

        },

        deleteAll() {
            location.reload()
        },
    },

}).mount('#app')