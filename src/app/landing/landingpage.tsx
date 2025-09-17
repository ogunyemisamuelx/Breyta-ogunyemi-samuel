import React from "react";
import Image from "next/image";

const Landingpage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col p-12 gap-10">
      <div className="w-full flex justify-between">
        <div className="flex flex-col  gap-7">
          <div className="text-[52px] font-serif w-[80%] font-normal">
            All your qualitative data. One place. instant anwsers.
          </div>
          <div className="font-normal text-[19px]">
            <p>Fast. Deep, comprehensive answers in seconds</p>
            <p>Accurate. Built to minimise errors/hallucination.</p>
            <p>Trustworthy. Always backed by evidence.</p>
            <p>Scalable. Analyse hours of conversations in one go.</p>
          </div>
          <div>
            <button className=" px-8 py-3 text-[19px] font-semibold text-[#FFFC92] rounded-3xl bg-[#311F35]">
              Start 14-day free trial
            </button>
          </div>
        </div>
        <div className="w-[800px] h-[400px] border"></div>
      </div>
      <div className="w-full flex items-center justify-center mt-16 gap-20">
        <div>SOC 2 Type II</div>
        <div>Data stored in scandinavia</div>
        <div>PII Redaction</div>
        <div>GDPR</div>
        <div>NO AI training using data</div>
      </div>
      <div className="w-full flex items-center justify-center mt-10 flex-col">
        <div className="text-[27px] font-semibold">
          Trusted by research, product teams and academia at...
        </div>
        {/* {parent} */}
        <div className="flex">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
      <div className="flex items-center justify-center  mt-20 flex-col font-semibold">
        <div className="text-[35px]"> Unlock massive scale</div>
        <div className="flex gap-4 mt-10 text-[21px] text-center">
          <div>Search across unlimited files</div>
          <div>Optimised for analysis across many files</div>
          <div>Deep analysis of 30+ hrs of interviews at once</div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center border mt-10">
        <div className="w-[1000px] h-[400px] rounded-md  bg-[#F1EBF5] flex flex-col items-center justify-center">
          <div>""</div>
          <div>
            "It is such a game changer to get all the transcripts and insights
            in seconds, and to be able to cross check hypotheses based on many
            participants. Still by manually checking all the key findings, we
            save loads of time by using Breyta. I love seeing Breyta doing the
            job, and doing it so well!"
          </div>
          <div>Netlife</div>
          <div>Cecilie Smestad</div>
          <div>User Experienced Consultant</div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <div className=" font-semibold text-[45px]">
          Privacy and security first
        </div>
        <div>We are SOC 2 Type 2 certified</div>
        <div>We store data in Scandinavia, Europe</div>
        <div>
          Can you help me anonymise my data? i dontt want any PII in my data.
        </div>
        <div>We are GDPR complaint</div>
        <div>We handle data deletion for you</div>
        <div>Your data will never be used to train AI models</div>
        <div>Which languages do you transcribe to?</div>
      </div>
      <div className="flex justify-center items-center">
        <button className=" px-8 py-3 text-[19px] font-semibold text-[#FFFC92] rounded-3xl bg-[#311F35]">
          Get started for free
        </button>
      </div>
      <Image
        src="/Goggle.png"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        alt=""
      />
    </div>
  );
};

export default Landingpage;
