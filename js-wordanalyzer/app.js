$(function(){
    $('form').submit(function (event) {
        event.preventDefault();



        let text = $('#user-text').val();

        let words = text.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();

        let wordFreq = {};

        for (let eachWord of words){
            if(eachWord in wordFreq){
                wordFreq[eachWord]++;
            }
            else
            {
                wordFreq[eachWord]=1;
            }
        }


        $('.hidden').removeClass('hidden');

        $('.js-word-count').append(function(){
            $(this).empty();
            return words.length;
        });

        $('.js-unique-count').append(function(){
            $(this).empty();
            return Object.keys(wordFreq).length;
        });

        $('.js-word-length').append(function(){
            $(this).empty();
            let total=0;
            let count=1;

            for(let eachWord of words){
                total += eachWord.length;
                count ++;
            }
            return total/count;
        });
    })
});