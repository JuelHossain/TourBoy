import React from 'react';
import me from '../../me.png'

const About = () => {
    return (
      <div className="">
        <h1 className="text-5xl m-4 text-center">About Me </h1>
        <div className="flex gap-4 justify-center">
          <div className=" image w-96 h-96">
            <img
              className="w-full h-full object-cover object-top"
              src={me}
              alt=""
            />
          </div>
                <div className="title">
                    <p className=' m-2 leading-[60px] mt-32 p-2 text-start text-5xl font-bold'>Hi There, <br /> My Name is Juel Hossain</p>
                    <p className='text-xl m-3 p-2 '>I Will be more than happy to travel with you</p>
          </div>
            </div>
            <div className="details">
                <p className='text-2xl p-10'>So you want to know about me. I am a traveler and  tour guide i am located in bangladesh i have visited many country in the world but not like bangladesh. the raw beauty of bangladesh makes it unique . if you want to travel bangladesh . you must need a travel guide . i can guide you in any place in bangladesh. I am trusted and reliable . you can travel with me without any fare. trust me you are gonna have fun traveling bangladesh. my goal is to give my client the best feelings i can give. i lives in dhaka city when i need to go outside dhaka city i also like to travel it alot .you can think me as your tour pertner instead of a tour guide . or if you want to keep some distance you can also do that there's no problem i am open minded . and not so judgmental i respect woman and guys both i am not recist at all. black and white i don't care afterall we are all human being. thank you guys for reading my about. kindly visit the site and tell us about the website. thank you.</p>
            </div>
      </div>
    );
};

export default About;