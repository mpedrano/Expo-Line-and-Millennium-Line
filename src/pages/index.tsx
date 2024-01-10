import dynamic from "next/dynamic"
import Image from "next/image";

const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Home() {
  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <div style={{ fontSize: '30px', textAlign: 'center', paddingRight: 10 }}>Expo Line and Millenium Line</div>
        <Image src="/images/custom-logo.svg" width={40} height={40} alt="logo" />
      </header>
      <DynamicMap />
    </div>
  )
}