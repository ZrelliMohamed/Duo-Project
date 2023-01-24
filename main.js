function each(element, func) {
   if (Array.isArray(element) || typeof element === "string") {
       for (var i = 0; i < element.length; i++) {
           func(element[i], i);
       }
   } else {
       if (typeof element === "object") {
           for (var keys in element) {
               func(element[keys], keys)
           }
       }
   }
   return "the element should be Array , Object or string to use each"

}
function filter(coll, predicate) {
   var acc = {}
     if(Array.isArray(coll)){acc=[]}
   each(coll, function(element,index) {
     if (predicate(element,index)) {
      
         if(Array.isArray(acc)){acc.push(element)}
         else{acc[index]=element}
     }
   });
   return acc;
 }


var Base = [
     {
        src:"https://images.immediate.co.uk/production/volatile/sites/4/2021/05/handmade-22db10a.jpg?quality=90&webp=true&resize=210,338",
        Price : 17.99,
        Author : 'Anna Ploszajski',
        Type : "Scientific",
        description:"Scientists tend to think about materials in terms of quantities like their melting point, their density and how much pressure they can withstand. But humanity's earliest materials scientists didn't work in a lab measuring how much stress an object could withstand: they worked with their hands and made things.Anna Ploszajski, herself a materials scientist, goes back to these ancient roots to explore in a hands-on way. She learns from the trial-and-error wisdom of generations of experts in clay, sugar, steel, glass, paper and more."
     },
     {
        src:"https://m.media-amazon.com/images/I/51IXWZzlgSL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        Price : 12.99,
        Author : 'Harper Lee',
        Type : "Literature",
        description:"One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime."
     },
     {
        src:"https://m.media-amazon.com/images/I/51rxEvLljUL._SX322_BO1,204,203,200_.jpg",
        Price : 11.99,
        Author : 'Yann Martel',
        Type : "Fiction",
        description:"After the sinking of a cargo ship, a solitary lifeboat remains bobbing on the wild blue Pacific. The only survivors from the wreck are a sixteen-year-old boy named Pi, a hyena, a wounded zebra, an orangutan—and a 450-pound Royal Bengal tiger. Soon the tiger has dispatched all but Pi Patel, whose fear, knowledge, and cunning allow him to coexist with the tiger, Richard Parker, for 227 days while lost at sea. When they finally reach the coast of Mexico, Richard Parker flees to the jungle, never to be seen again. The Japanese authorities who interrogate Pi refuse to believe his story and press him to tell them the truth. After hours of coercion, Pi tells a second story, a story much less fantastical, much more conventional—but is it more true?"
     }, 
      {
        src:"https://m.media-amazon.com/images/I/41WFui0VhzL._SX322_BO1,204,203,200_.jpg",
        Price : 16.99,
        Author : 'Steve Nico Williams',
        Type : "Literature",
        description:"Essential Life Skills Every Young Person Should Have is a comprehensive guide to mastering the fundamental abilities necessary for success and well-being in the modern world. Written with young adults in mind, the book covers a wide range of life skills, including critical thinking, problem-solving, decision making, communication, and emotional intelligenc The book begins by introducing the concept of life skills and the importance of developing them for both individual success and the betterment of society as a whole. It goes on to explore the key components of creativity, an essential life skill that enables individuals to think outside the box, reframe problems, and generate new ideas. The book also delves into the importance of fluency and elaboration in fostering a strong ability to generate a large number of relevant thoughtsDecision-making is another crucial life skill addressed in the book. The author provides a clear and concise overview of the steps involved in making effective decisions, including identifying an issue, assessing requirements, setting goals, and finding alternatives. The book also stresses the importance of emotional intelligence, which includes the ability to empathize and control one's own emotions.   The book also highlights the importance of social-emotional learning, with a focus on self-awareness, social awareness, self-management, responsible decision-making, and relationship-building. These abilities are essential for young adults, as they prepare for the responsibilities of adulthood and work towards achieving success, happiness, and fulfillment.  The author also provides practical advice and strategies for developing the life skills outlined in the book. For example, the book discusses the importance of effective communication, including verbal and written skills, and provides tips for adjusting communication styles to different audiences. Time management, stress management, and negotiation skills are also covered, providing readers with the tools they need to manage their daily lives.    Financial management, budgeting, and goal-setting are also covered, providing young adults with the necessary skills to manage their finances and take control of their financial future. Additionally, the book provides advice on interviewing and filling out job applications, helping young adults prepare for the world of work.In summary, Essential Life Skills Every Young Person Should Have is an indispensable guide for young adults seeking to master the skills necessary for success and well-being in the modern world. With its focus on critical thinking, problem-solving, decision making, communication, and emotional intelligence, this book is essential reading for anyone looking to improve their life skills and prepare for the future."
     }, { 
      src:"https://m.media-amazon.com/images/I/41iWUx2mwdL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
     Price : 17.99,
     Author : 'Karen Harris',
     Type : "Literature",
     description:"The teenage years are an exciting yet ever-changing period of your life. New challenges and tasks seem to pop up almost daily—not to mention all the transitions your body is going throughs you get older and take on more responsibilities, you have probably wondered how to do many of the adult tasks your parents or older siblings seem to breeze through daily. Everyday challenges like how to tell if the chicken in the fridge has gone bad to how to get rid of dandruff has likely crossed your mind. As you learn and experience new things, questions about basic life skills will arise. This book is here to help you solve the daily problems adults take for granted.While the internet provides a wealth of knowledge, it can be overwhelming to navigate at times. I mean, which of the thirteen articles about budgeting and saving money is actually accurate? And yes, you can ask your parents or other trusted adults in your life to teach you specific skills, but sometimes you just want to figure it out on your own. That’s where this guide comes into play."
  },  {
   src:"https://m.media-amazon.com/images/I/41JNWeZqnsL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  Price : 15.99,
  Author : 'Jack London',
  Type : "Anthologies",
  description:"The Call of the Wild is a novel by Jack London published in 1903. The story is set in the Yukon during the 1890s Klondike Gold Rush—a period in which strong sled dogs were in high demand. The novel's central character is a dog named Buck, a domesticated dog living at a ranch in the Santa Clara Valley of California as the story opens. Stolen from his home and sold into service as sled dog in Alaska, he reverts to a wild state. Buck is forced to fight in order to dominate other dogs in a harsh climate. Eventually he sheds the veneer of civilization, relying on primordial instincts and learned experience to emerge as a leader in the wild.London lived for most of a year in the Yukon collecting material for the book. The story was serialized in the Saturday Evening Post in the summer of 1903; a month later it was released in book form. The novel’s great popularity and success made a reputation for London. Much of its appeal derives from the simplicity of this tale of survival. As early as 1908 the story was adapted to film and it has since seen several more cinematic adaptations."
},
{
   src:"https://m.media-amazon.com/images/I/41NqYkQf1FL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  Price : 15.99,
  Author : 'Travis Langley',
  Type : "History",
  description:"Batman and Psychology returns! This updated edition of the acclaimed best-seller shares fresh insights and truths about human nature by investigating Batman, one of the world's most compelling and enduring characters since his debut in 1939. Why does this superhero without superpowers fascinate us? What does that fascination say about us? Explore these and other intriguing questions about the masked hero, including: Does Batman show PTSD or posttraumatic growth? Why does he fight crime? Why as a vigilante? Why the mask, the bat, and the underage partner? Why are his most intimate relationships with bad girls he ought to lock up? And why won't he kill that homicidal clown?With new chapters and updated information throughout along with a re-introduction by Michael Uslan (executive producer - Batman, The Dark Knight, The Batman), Batman and Psychology combines psychological theory and research to dive into his city's shadows and his cave's depths to know the mind of the Dark Knight, along with his power to inspire."
},
{
   src:"https://m.media-amazon.com/images/I/410D4H0IqjL._SX318_BO1,204,203,200_.jpg",
  Price : 09.99,
  Author : 'Alan Moore',
  Type : "Politics",
  description:"A hit HBO original series, Watchmen, the groundbreaking series from award-winning author Alan Moore, presents a world where the mere presence of American superheroes changed history--the U.S. won the Vietnam War, Nixon is still president, and the Cold War is in full effect.Considered the greatest graphic novel in the history of the medium, the Hugo Award-winning story chronicles the fall from grace of a group of superheroes plagued by all-too-human failings. Along the way, the concept of the superhero is dissected as an unknown assassin stalks the erstwhile heroes.This edition of Watchmen, the groundbreaking series from Alan Moore, the award-winning author of V For Vendetta and Batman: The Killing Joke, features art from industry legend Dave Gibbons, with high-quality, recolored pages found in Watchmen: Absolute Edition."
},
{
   src:"https://m.media-amazon.com/images/I/41L54NRLpUL._SX311_BO1,204,203,200_.jpg",
  Price : 10.99,
  Author : 'Enzo Malavart',
  Type : "Wild",
  description:"In the north-eastern region of South Africa, next to the famed Kruger National Park, there lies a place unlike any other called the Sabi Sands. There male lions roam; not alone or in pairs, but in large coalitions of four or five individuals battling for control over prides and territoryAmid this endless stretch of hostile grass, six brothers are born. Thrown into the wild at an early age, they will learn to put aside their inner strife and face the world as one. Together, they will grow into one of the most infamous, most violent lion coalition the continent as ever seen: the Mapogos.This is their story. The hardships they endured, the moments of wild triumph they enjoyed, the scars they earned.Above it all, this is the tale of an instinct: an indomitable need to always push through one more horizon, one more battle, in search of that ever-elusive far side, at the end of grass."
},
]
// this code display ourr data  in our desgin of cards in the container
function display(){
var str=""
for (var i = 0; i < Base.length; i++) {
    str ="<div class='grid-product'><div><table id='cards-info'><td class='td-first'><img src='"+Base[i].src+"' class='img-product'/></td><td><div class='td-last'> Price : "+Base[i].Price+" DT</div><div class='td-last'> Athor : "+Base[i].Author+"</div><div class='td-last'> Type : "+Base[i].Type+"</div></td></table></div><div class='Description'>"+Base[i].description.slice(0,200)+"etc.</div><center><input type='button' value='BUY' class='btn-buy' ></center> </div>"
    $("#Container").append(str)
}}



$("#btn-Filter").on("click",function () {
  var tosearch =$("#search").val()
  $("#Container").empty();
  var filtred= filter(Base,function (e){
   return typeof e.Author ==="string" &&e.Author.toUpperCase().includes(tosearch.toUpperCase())  ||
   typeof e.Type ==="string" &&e.Type.toUpperCase().includes(tosearch.toUpperCase())
  })
   each(filtred,function (e) {
      
      
      $("#Container").append($(`<div class='grid-product'><div><table id='cards-info'><td class='td-first'><img src=${e.src} class='img-product'/></td><td><div class='td-last'> Price : ${e.Price} DT</div><div class='td-last'> Athor : ${e.Author} </div><div class='td-last'> Type :${e.Type} </div></td></table></div><div class='Description'>"+${e.description.slice(0,200)+"etc."} </div><center><input type='button' value='BUY' class='btn-buy' ></center> </div>`))
         
    

   
})
$("#search").val("")
})




