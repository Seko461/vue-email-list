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
                    })

                // this.randomMail = response.data.response

            }

        },




    }
}).mount('#app')