<template>
    <div class="verset">
        <h1>Verset à mémoriser :</h1>
        <cite>"{{ verse }}"</cite>
        <br>
        <br>
        <p class="book"><b>{{ book }}</b></p>
        <br>
        <div class="btnVerse" @click="displayVerse">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Verset
        </div>
    </div>
</template>

<script>
import data from "@/data.json"
export default {
    name: "Verset",
    data () {
        return {
        book:"",
        verse: ""
        }
    },
    methods: {
        displayVerse(){
            let verse = data.bible[Math.floor(Math.random()*data.bible.length)];
            this.verse = verse.verse;
            this.book = verse.book;
        }
    }
}
</script>

<style scoped>
.verset{
    text-align: center;
    border: 2px solid black;
    box-shadow: gray 5px 5px 10px;
    padding: 15px;
}
.verset h1{
    padding: 20px;
}
</style>