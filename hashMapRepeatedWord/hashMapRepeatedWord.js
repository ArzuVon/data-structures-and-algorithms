
export const  solve = (string) => {

    let map = new Map();  // to store occurrences of word
    let t = "";
    let ans = "";

    // traversing from back makes sure that we get the word which repeats first as ans
    for(let i = string.length - 1; i >= 0; i--)
    {
        // if char present , then add that in temp word string t
        if(string[i] != ' ')
        {
            t += string[i];

        }

        // if space is there then this word t needs to stored in map
        else
        {

            // if that string t has occurred previously then it is a possible ans
            if(map.has(t))
               ans = t;
            else map.set(t, 1)

            // set t as empty for again new word
            t = "";

        }
    }

    // first word like "he" needs to be mapped
    if(map.has(t)) ans=t;

    if(ans!="")
    {
        // reverse ans string as it has characters in reverse order
        ans = [...ans].reverse().join("");
        console.log(ans);
    }
    else
console.log("No Repetition");


//TEST

const v = "How much wood could a woodchuck chuck could a woodchuck would chuck wood";
const w = "he had had he";
const a = "Von had been saying that";
const u = "Once upon a time, there was a brave princess who...";

solve(u);
solve(v);
solve(w);
solve(a);


}