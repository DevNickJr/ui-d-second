import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

export default function Home() {
  return (
    <div className="font-mono">
      <div className="flex gap-10 justify-between items-end py-20 max-w-[800px] mx-auto mb-24">
        <div className="flex flex-col gap-3 max-w-[480px]">
          <Image
            src="/me.jpg"
            width={48}
            height={48}
            alt="hero"
            className="rounded-full bg-[#E5E5E5]"
          />
          <h1 className="text-[32px] leading-[40px] font-normal font-serif text-transparent bg-[url(/text.jpg)] bg-clip-text bg-center tracking-[-2%]">Hi, I&apos;m David</h1>
          <ul className="flex flex-col gap-[3px] text-base font-mono leading-[24px] tracking-[-3%]">
            <li className="">&gt; Result-driven Product designer with 5 years of experience</li>
            <li className="">&gt; Work across Product, Brand and motion design</li>
            <li className="">&gt; Expertise in Saas and consumer products</li>
            <li className="">&gt; Worked for different brands in AI, travel engagements,Event management, Fintech, E-commerce healthtech.</li>
            <li className="">&gt; Led Design for products with &gt; 10k daily active users </li>
            <li className="">&gt; Expert in creative and strategized design</li>
          </ul>
        </div>   
        <Image
          src="/hero2.png"
          width={254}
          height={254}
          alt="hero"
          className="w-[254px] h-[254px] bg-[#E5E5E5]"
        />
      </div>
      <section className="max-w-[800px] mx-auto w-full mb-24">
        <div className="flex items-center gap-2 text-[#444444] mb-14">
          <span className="text-sm whitespace-nowrap tracking-[-3%] eading-[28px]">Here&apos;s What I&apos;m good at</span>
          <div className="relative w-full">
            <span className="h-2 w-2 rounded-full absolute left-0 top-1/2 -translate-y-1/2 bg-[#444444]" />
            <div className="absolute h-[1px] w-full bg-[#444444]" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-[800px] mx-auto md:px-12">
          <div className="flex flex-col gap-3.5">
            <h5 className="text-2xl italic leading-[40px] font-normal font-serif text-[#EEEEEE] tracking-[-2%]">Product Design</h5>
            <p className="text-sm text-[#E5E5E5]">Designing software that bridges for ideas, technology, business and users.making user friendly applications.</p>
            <div className="h-[233px] w-full bg-[#444444] rounded-xl relative">
              <video className='absolute h-full w-full rounded-xl z-10 left-0 top-0' autoPlay muted playsInline>
                <source src="/product-design.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <a href="" className="flex items-center text-[#7EF1D0] text-base">
              <span >See works</span>
              <LuArrowUpRight size={'1.3rem'} />
            </a>
          </div>
          <div className="flex flex-col gap-3.5">
            <h5 className="text-2xl italic leading-[40px] font-normal font-serif text-[#EEEEEE] tracking-[-2%]">Brand Design</h5>
            <p className="text-sm text-[#E5E5E5]">Creating visual assets that communicates company tone of messaging with logos, colours, typography mockups, flyers.</p>
            <div className="h-[233px] w-full bg-[#444444] rounded-xl relative">
              <video className='absolute h-full w-full rounded-xl z-10 left-0 top-0' autoPlay muted playsInline>
                <source src="/brand-design.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <a href="" className="flex items-center text-[#7EF1D0] text-base">
              <span >See works</span>
              <LuArrowUpRight size={'1.3rem'} />
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-[800px] mx-auto w-full mb-24">
        <div className="flex items-center gap-2 text-[#444444] mb-14">
          <span className="text-sm whitespace-nowrap tracking-[-3%] eading-[28px]">Some recent works here</span>
          <div className="relative w-full">
            <span className="h-2 w-2 rounded-full absolute left-0 top-1/2 -translate-y-1/2 bg-[#444444]" />
            <div className="absolute h-[1px] w-full bg-[#444444]" />
          </div>
        </div>
        <div className="flex max-w-[703px] w-full mx-auto flex-col gap-16">
          <div className="flex flex-col gap-3 w-full">
            <Image
              src="/travel.png"
              width={700}
              height={330}
              alt="hero"
              className="w-full h-[330px] rounded-xl bg-[#E5E5E5]"
            />
            <p className="text-3xl leading-[40px] font-normal font-serif text-white tracking-[-2%]">Travel with friends: <span className="italic">Designing a social media platform for travellers to meet fellow adventurers and host trips with AI</span></p>
            <p className="flex items-center text-[#6CCAF9] text-[13px] font-medium">Artificial Intelligence</p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div 
              className="w-full h-[330px] bg-cover bg-center rounded-xl bg-[url(/anni.png)]"
            />
            {/* <Image
              src="/anni.png"
              width={700}
              height={330}
              alt="hero"
              className="w-full h-[330px] bg-cover bg-center rounded-xl bg-[#E5E5E5]"
            /> */}
            <p className="text-2xl leading-[28px] font-normal font-serif text-white tracking-[-2%]">AI and Relationships: Designing an AI companion for relationships at Mado AI</p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div 
              className="w-full h-[330px] bg-cover bg-top rounded-xl bg-[url(/reserve.png)]"
            />
            {/* <Image
              src="/ai.png"
              width={700}
              height={330}
              alt="hero"
              className="w-full h-[330px] bg-cover bg-center rounded-xl bg-[#E5E5E5]"
            /> */}
            <p className="text-2xl leading-[28px] font-normal font-serif text-white tracking-[-2%]">Improving RightmoveUK Search experience: Designing a social media platform for travellers to meet fellow adventurers and host trips with AI</p>
          </div>
        </div>
       
      </section>
      <section className="max-w-[800px] mx-auto w-full mb-24">
        <div className="flex items-center gap-2 text-[#444444] mb-14">
          <span className="text-sm whitespace-nowrap tracking-[-3%] eading-[28px]">Pretty straight forward right</span>
          <div className="relative w-full">
            <span className="h-2 w-2 rounded-full absolute left-0 top-1/2 -translate-y-1/2 bg-[#444444]" />
            <div className="absolute h-[1px] w-full bg-[#444444]" />
          </div>
        </div>
        <div className="flex max-w-[550px] w-full mx-auto flex-col gap-7">
          <div className="flex justify-between flex-col md:flex-row font-medium gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[#444444]">Contact me here</span>
              <span>davidikperi@gmail.com</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#444444]">Or book a call here</span>
              <span>cal.com/davidikperi/15min</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#444444]">Some links</span>
            <div className="flex items-center gap-4">
              <a href="" target="_blank">Twitter</a>
              <a href="" target="_blank">LinkedIn</a>
              <a href="" target="_blank">Behance</a>
              <a href="" target="_blank">Email</a>
              <a href="" target="_blank">Resume</a>
            </div>
          </div>
          <h1 className="mt-7 text-[32px] leading-[40px] font-normal font-serif text-transparent bg-[url(/text.jpg)] bg-clip-text bg-center tracking-[-2%]">Made for you the viewer, Let&apos;s talk soon!</h1>
        </div>
      </section>
    </div>
  );
}
