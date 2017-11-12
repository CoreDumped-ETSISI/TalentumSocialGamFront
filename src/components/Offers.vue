<template>
    <Offer/>
</template>

<script>
import Offer from '@components/Offer'

export default{
    name: "Offers",
    components: {
        Offer
    },
    methods: {
        loadOffer() {

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://52.166.126.249:3000/getQuestions",
                "method": "GET",
                "headers": {}
            }

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        }
    },

    mounted: function () {
        this.loadOffer();
    }
}
