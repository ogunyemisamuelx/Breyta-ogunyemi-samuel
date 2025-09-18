import Image from "next/image";
import { Shield, Globe, Lock, FileSearch, CheckCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col p-6 md:p-12 gap-10 bg-[#F8F4FB]">
      {/* HERO SECTION */}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-8">
        {/* LEFT */}
        <div className="flex flex-col gap-7 lg:w-1/2">
          <h1 className="text-[36px] md:text-[52px] font-serif font-normal leading-tight">
            All your qualitative data. One place. Instant answers.
          </h1>
          <div className="font-normal text-[16px] md:text-[19px] space-y-2">
            <p>⚡ Fast. Deep, comprehensive answers in seconds.</p>
            <p>✅ Accurate. Built to minimise errors/hallucinations.</p>
            <p>🔒 Trustworthy. Always backed by evidence.</p>
            <p>📈 Scalable. Analyse hours of conversations in one go.</p>
          </div>
          <button className="px-8 py-3 text-[19px] font-semibold text-[#FFFC92] rounded-3xl bg-[#311F35] w-fit">
            Start 14-day free trial
          </button>
        </div>

        {/* RIGHT - HERO IMAGE */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="w-full max-w-[800px] h-[250px] md:h-[400px] border rounded-md bg-[#EDEAF1]">
            <Image
              src="/vid.png"
              width={100}
              height={100}
              alt=""
              className=" w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div className="w-full flex flex-wrap justify-center mt-16 gap-10 text-center text-[15px] md:text-[17px]">
        <div className="flex items-center gap-2">
          <Shield className="text-purple-700" /> SOC 2 Type II
        </div>
        <div className="flex items-center gap-2">
          <Globe className="text-purple-700" /> Data stored in Scandinavia
        </div>
        <div className="flex items-center gap-2">
          <Lock className="text-purple-700" /> PII Redaction
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="text-purple-700" /> GDPR
        </div>
        <div className="flex items-center gap-2">
          <FileSearch className="text-purple-700" /> No AI training using data
        </div>
      </div>

      {/* TRUSTED BY SECTION */}
      <div className="w-full flex flex-col items-center mt-10 text-center">
        <h2 className="text-[22px] md:text-[27px] font-semibold">
          Trusted by research, product teams and academia at...
        </h2>
        <div className="flex flex-wrap gap-6 mt-6 text-[20px]">
          <div className=" px-4 py-2 rounded-md shadow-sm">
            <Image
              src="/nor.png"
              width={120}
              height={90}
              className=" object-contain w-[170px] h-[40px]"
              alt=""
            />
          </div>
          <div className=" px-4 py-2 rounded-md ">
            {" "}
            <Image
              src="/havard.png"
              width={120}
              height={90}
              className=" object-contain w-[170px] h-[40px]"
              alt=""
            />
          </div>
          <div className=" px-4 py-2 rounded-md ">
            {" "}
            <Image
              src="/ntelife.png"
              width={120}
              height={90}
              className=" object-contain w-[170px] h-[40px]"
              alt=""
            />
          </div>
          <div className=" px-4 py-2 rounded-md ">
            {" "}
            <Image
              src="/dips.webp"
              width={120}
              height={90}
              className=" object-contain w-[170px] h-[40px]"
              alt=""
            />
          </div>
          <div className=" px-4 py-2 rounded-md ">
            {" "}
            <Image
              src="/ite.png"
              width={120}
              height={90}
              className=" object-contain w-[170px] h-[40px]"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* SCALE SECTION */}
      <div className="flex flex-col items-center text-center mt-20 font-semibold">
        <h2 className="text-[28px] md:text-[35px]">Unlock massive scale</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10 text-[18px] md:text-[21px] max-w-3xl">
          <div>🔍 Search across unlimited files</div>
          <div>📊 Optimised for analysis across many files</div>
          <div>🎙️ Deep analysis of 30+ hrs of interviews at once</div>
        </div>
      </div>

      {/* TESTIMONIAL */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-[1000px] h-auto min-h-[300px] md:h-[400px] rounded-md bg-[#F1EBF5] flex flex-col items-center justify-center p-6 md:p-12 text-center space-y-4">
          <div className="text-4xl text-purple-600">“</div>
          <p className="text-[16px] md:text-[18px] italic leading-relaxed">
            It is such a game changer to get all the transcripts and insights in
            seconds, and to be able to cross-check hypotheses based on many
            participants. Still by manually checking all the key findings, we
            save loads of time by using Breyta. I love seeing Breyta doing the
            job, and doing it so well!
          </p>
          <div className="font-bold">Netlife</div>
          <div>Cecilie Smestad</div>
          <div className="text-sm text-gray-600">
            User Experience Consultant
          </div>
        </div>
      </div>

      {/* PRIVACY SECTION */}
      <div className="w-full flex flex-col items-center text-center mt-20 gap-2">
        <h2 className="font-semibold text-[30px] md:text-[45px]">
          Privacy and security first
        </h2>
        <p>We are SOC 2 Type 2 certified</p>
        <p>We store data in Scandinavia, Europe</p>
        <p>Can you help me anonymise my data? We remove PII automatically.</p>
        <p>We are GDPR compliant</p>
        <p>We handle data deletion for you</p>
        <p>Your data will never be used to train AI models</p>
        <p>We support multiple languages for transcription</p>
      </div>

      {/* CTA */}
      <div className="flex justify-center items-center mt-10">
        <button className="px-8 py-3 text-[19px] font-semibold text-[#FFFC92] rounded-3xl bg-[#311F35]">
          Get started for free
        </button>
      </div>

      {/* FOOTER IMAGE */}
      <Image
        src="/Goggle.png"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto mt-12"
        alt="Google Logo"
      />
    </div>
  );
};

export default LandingPage;
