//Generate a basic insight based on months size 12
const zodiacSigns = [
    "Aries", "Taurus", "Gemini",  "Cancer", "Leo",  "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", 
    "Aquarius", "Pisces"
];
  

// compliment for user  based on date size 31
const compliments = [
    "You have a great sense of humor!", "Your creativity is inspiring!", "You have a kind heart.",
    "You light up the room with your presence.","Your confidence is contagious.",
    "You have an amazing ability to make others smile.",
    "Your determination is admirable.","You're a fantastic friend!",
    "Your intelligence shines through in everything you do.",
    "You're incredibly talented.","You have a unique and wonderful perspective.",
    "Your positivity is uplifting.", "You're a great listener.","You make the world a better place.",
    "Your generosity knows no bounds.", "You have a beautiful soul.",
    "You're a natural leader.","Your enthusiasm is infectious!",
    "You inspire those around you.","You're a problem solver.",
    "You have an eye for detail.","Your energy is refreshing!","You're so thoughtful and considerate.",
    "You handle challenges with grace.", "You are appreciated more than you know.",
    "You bring out the best in people.", "You have a great sense of style.",
    "Your kindness is a gift to the world.", "You're a ray of sunshine!",
    "You are capable of achieving great things.","You make a difference every day!"
];


// size 20 
const victimCardCompliments = [
    "You always give your best, but people don’t always appreciate it.",
    "Your kindness is often taken for granted, yet you continue to shine.",
    "You always help others, but when you need help, no one is there.",
    "You sacrifice so much, yet people fail to see your worth.",
    "Your heart is pure, but not everyone deserves your love.",
    "You always understand others, but no one truly understands you.",
    "You forgive easily, even when others don’t deserve it.",
    "You put others first, but they rarely do the same for you.",
    "You are always there for everyone, but who is there for you?",
    "You carry so much pain, yet you always smile for others.",
    "Your loyalty is unshakable, yet people often betray you.",
    "You see the best in people, even when they don't deserve it.",
    "Your emotions run deep, but people fail to notice your struggles.",
    "You always give second chances, even when you shouldn’t.",
    "You are a healer, yet no one stays to heal you.",
    "You offer unconditional love, but rarely receive it in return.",
    "You stay strong for others, even when you feel broken inside.",
    "You are a rare gem, but people don’t recognize your true value.",
    "You endure so much, yet people only see your strength, not your struggles.",
    "You deserve more than what life has given you, but your time will come."
];


// life of recomandation size 30
const lifeRecommendations = [
    "Feed a street dog or animal in need to spread kindness.",
    "Take a walk in nature to clear your mind and relax.",
    "Call an old friend just to check in and reconnect.",
    "Practice gratitude every morning for a positive start.",
    "Volunteer at a local shelter or food bank to give back.",
    "Set aside 30 minutes every day to read something uplifting.",
    "Do a random act of kindness for a stranger.",
    "Try a new hobby or skill you've always wanted to learn.",
    "Spend time meditating or practicing mindfulness.",
    "Keep a journal of your thoughts, dreams, and aspirations.",
    "Compliment someone genuinely and brighten their day.",
    "Declutter your space to feel more organized and at peace.",
    "Treat yourself to a relaxing bath or self-care routine.",
    "Invest time in strengthening your relationships with loved ones.",
    "Learn to say 'no' when needed to protect your peace.",
    "Take a social media detox for a week to reconnect with real life.",
    "Focus on your physical health with a new exercise routine.",
    "Listen to uplifting music to boost your mood.",
    "Spend quality time with family or loved ones regularly.",
    "Take a moment to appreciate the small things in life.",
    "Do something creative like painting, writing, or crafting.",
    "Start a savings plan to work toward your future goals.",
    "Set personal boundaries to protect your mental health.",
    "Practice forgiveness, even if it's difficult, for your own peace.",
    "Take a day off to rest and recharge when feeling overwhelmed.",
    "Help someone learn something new, it will give you joy.",
    "Try practicing yoga to relieve stress and improve flexibility.",
    "Give back to your community through small acts of service.",
    "Make time for a hobby that brings you joy and fulfillment.",
    "Set aside time to reflect on your goals and growth."
];


// future predictions size 20
const futurePredictions = [
    "A major opportunity will come your way soon—be ready to seize it.",
    "You will soon form a bond with someone who will change your life.",
    "A new chapter in your career is about to unfold with exciting possibilities.",
    "An unexpected journey will bring you new perspectives and growth.",
    "You will find a solution to a problem that's been troubling you for a while.",
    "A creative endeavor will bring you recognition and satisfaction.",
    "Someone will reach out to you for help, and your guidance will make a big difference.",
    "In the near future, you'll make a decision that will significantly shape your path.",
    "A financial opportunity will arise that will lead to greater stability.",
    "Expect a pleasant surprise in your personal life very soon.",
    "A dream or goal you've been working toward will soon become a reality.",
    "A change in your environment will bring positive shifts to your mindset.",
    "You will soon discover something new about yourself that will inspire you.",
    "In the coming months, you'll meet someone who will inspire personal growth.",
    "Your patience will pay off, and you'll achieve a long-awaited milestone.",
    "Soon, your hard work will be recognized and appreciated in unexpected ways.",
    "A challenge you're facing will soon come to an end, bringing peace and relief.",
    "A new hobby or interest will spark joy and creativity in your life.",
    "The coming year will bring new opportunities for growth and self-discovery.",
    "A past experience will soon teach you a valuable lesson that will benefit your future."
];


// access the form 
const form= document.getElementById('astroForm');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const Name = document.getElementById('name').value;
    const Surname = document.getElementById('surname').value;
    const Day = Number(document.getElementById('date').value);
    const Month = Number(document.getElementById('month').value);
    const Year = Number(document.getElementById('year').value);

    const Result = document.getElementById('result');

   const firstMessage=`Hello ${Name} ${Surname}`;
   const secondMessage=`Your Zodiac Sing is ${zodiacSigns[Month-1]}`; // for matching 0 indexing 
   const thirdMessage = compliments[Day-1];

   let index = Math.floor(Math.random()*20);
   const fourthMessage=  victimCardCompliments[index];

   // for fixed user recomandation with day*name*surname
   // "Pradip" "Garai" "26" = 286%30(size of array )
    index=(Name.length * Surname.length * Year)%30;
   const fifthMessage = lifeRecommendations[index];
   
   index = (Day*Month*Year)%20;
   const lastMessage = futurePredictions[index];

   Result.innerText =`${firstMessage}.${secondMessage}${thirdMessage}${fourthMessage} Our Recomandation For you : ${fifthMessage} Your Future Predictions is ${lastMessage}`;

})