import { Header } from "/src/components/Header/Header";
import { Main } from "/src/components/Main/Main";

export default function Home() {
  return (
    //   Homeのため”react fragment”を使用
    <>
      <Header />
      <Main />
    </>
  );
}
