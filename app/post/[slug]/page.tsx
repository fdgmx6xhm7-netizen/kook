import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Script from "next/script";
import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = postData.find((p) => p.id === parseInt(slug));

  return {
    title: `${post?.title || "Post"}`,
    description: post?.content.slice(0, 150) || "Read this post on Kook.",
    openGraph: {
      title: post?.title || "Post",
      description: post?.content.slice(0, 150) || "Read this post on Kook.",
      images: [post?.image || "/placeholder.jpg"],
    },
  };
}

const postData = [
  {
    id: 1,
    title:
      "Mga Reaksyon ng mga Koreano sa Physical: Asia Episode 1~6 (Tagalog na Salin)",
    content: `Buod ng mga aktwal na misyon sa Netflix Physical: Asia Episode 1~6  
(Ipinapalabas mula Oktubre 28 ~ Nobyembre 4, 2025)

1화: 해가 뜨는 곳 → Akyatin ang pader hanggang dulo  
2화: 벼랑 끝 → Magbuhat at maghila ng 50kg sandbag sa burol  
3화: 난파선 → Giant shipwreck obstacle course + team relay  
4화: 간절한 기도 → Buhatin ang 100kg + 400m sprint  
5화: 수상한 마을 → 1:1 tournament + team strategy battle  
6화: 넘을 수 없는 벽 → Lampasan ang napakataas na pader + buhatin ang 200kg na kasama papunta sa finish line!

<Mga Komento>

@PinoyPrideGlobal  
Sabi ng mga Koreano, nabigla raw sila sa lakas ng team natin ㅋㅋㅋ Salamat Korea!  

ㄴ@KDramaFanPH  
Nagkagulo raw ang mga Korean oppa, sabi nila “walang talo ang Pilipinas” ㅋㅋㅋ  

@JuanTamada  
Sabi ng mga Koreano, nabigla raw sila na nakangiti pa rin tayo kahit 200kg ang binubuhat… Normal lang ‘yan!  

ㄴ@HallyuPinoy  
Araw-araw kasi tayong nagje-jeep na puno ng 10 tao~  

@MariaMakiling  
Sa Korea raw, sinasabi nila “pinakamagaling ang teamwork ng Pilipinas”! Naiiyak ako ㅠㅠ  

ㄴ@SeoulVibes  
Sobrang sinusuportahan daw tayo ng mga Koreano!  

@AdoboKingPH  
Sabi ng mga Koreano, “natural na halimaw ang mga Pilipino” daw… Pinoy Pride sumabog!  

ㄴ@KimchiLover  
Sabi pa ng mga Korean oppa, “kahit military training pa kami, talo pa rin sa Pilipino” ㅋㅋ  

@CebuWarrior  
Dahil sa sobrang lakas natin sa shipwreck mission, nagkakilabot raw ang mga Koreano!  

ㄴ@ManilaBoy  
Laking dagat kasi tayo!  

@VisayasQueen  
Sabi ng mga Koreano, “hindi namamatay ang Pilipino kahit 35 degrees” ㅋㅋ  

ㄴ@PinoyStrong  
Sanay na tayo sa init, kaya ganoon lang ‘yan!  

@MindanaoFighter  
Sa Korea raw, number 1 comment “mananalo ang Pilipinas sa finals”… totoo ba ‘to?!  

ㄴ@KPopStanPH  
Puro Pilipinas daw ang top pick ng Korean fans ㅋㅋㅋ  

@PalawanPrincess  
Sabi ng mga Koreano, “mga sundalong lumalaban sa baha at bagyo ang mga Pilipino”… naiyak ako sa sinabi nila  

ㄴ@PinoyForever  
Salamat sa suporta ninyo, Korea!  

@BicolExpress  
Nabigla raw ang mga Korean oppa sa katawan ng players natin… Syempre, natural ‘yan!  

ㄴ@HangeulMaster  
Sabi ng mga Koreano, “sa Korea retoke, sa Pilipinas natural beauty” ㅋㅋ  

@IlocanoPower  
Nang tumalon ang team natin sa pader, tumayo raw at nagpalakpakan ang mga Koreano! Sobrang nakakataba ng puso  

ㄴ@KoreaLoverPH  
Salamat sa malaking suporta ng Korean fandom!  

@PampangaPride  
Sabi ng mga Koreano, “akala namin madali ang buhay ninyo dahil kaalyado ng America, pero totoong lakas pala”  

ㄴ@PinoyPower2025  
Pinatunayan natin sa lakas, hindi sa salita!  

@QuezonCityKing  
Marami raw Koreano ang sumisigaw ng “Pinoy Pride”… Pinoy Pride sumabog talaga!  

ㄴ@GangnamGirl  
Nagdadasal daw ang mga Korean oppa na manalo tayo ㅋㅋㅋ  

@BatangasBeast  
Sabi ng mga Koreano, “kahit kanin lang ang kinakain ng Pilipino, sobrang lakas”… nabigla sila  

ㄴ@AdoboQueen  
Kanin ang pinagmulan ng lakas natin!  

@DavaoDestroyer  
Sabi ng mga Koreano, “kung team Korea ‘yan, kanina pa sumuko”… aminadong talo sila  

ㄴ@KPopPinoy  
Nahulog na raw sa atin ang mga Korean fans ㅋㅋㅋ  

@FilipinoFighter  
Number 1 comment sa Korea: “walang talo ang Pilipinas”! Salamat po!  

ㄴ@HallyuQueen  
Lagi nating Pinoy Pride! Mahal din namin ang Korea!`,
    image: "/1/philippines.png",
  },
  {
    id: 2,
    title: "ปฏิกิริยาคนเกาหลีต่อ Physical: Asia ตอน 1~6 (แปลไทย)",
    content: `สรุปภารกิจจริง Netflix Physical: Asia ตอน 1~6  
(ออกอากาศ 28 ต.ค. ~ 4 พ.ย. 2025)

1화: 해가 뜨는 곳 → ปีนกำแพงให้ถึงยอด  
2화: 벼랑 끝 → ลากกระสอบทราย 50 กก. ขึ้นเขา  
3화: 난파선 → ผ่านอุปสรรคเรืออับปากยักษ์ + วิ่งผลัดทีม  
4화: 간절한 기도 → ยกน้ำหนัก 100 กก. + วิ่ง 400 ม.  
5화: 수상한 마을 → ดวล 1:1 + การแข่งกลยุทธ์ทีม  
6화: 넘을 수 없는 벽 → ข้ามกำแพงยักษ์ + อุ้มเพื่อน 200 กก. ไปเส้นชัย!

<Mga Komento> (เปลี่ยนเป็นภาษาไทยเต็มรูปแบบ)

@ThaiPrideForever  
คนเกาหลีอ้าปากค้างดูทีมไทยเลย บอกว่า “ไทยเก่งเกิน!” ขอบคุณนะเกาหลี!  

ㄴ@KPopSiam  
โอปป้าเกาหลีตะโกนว่า “ไทยไม่มีแพ้!” ดังลั่นเลย ㅋㅋㅋ  

@SomchaiMuayThai  
คนเกาหลีบอกว่าเห็นทีมไทยอุ้ม 200 กก. แล้วยังยิ้มได้ตกใจมาก… ก็ปกติ!  

ㄴ@BangkokGirl  
ทุกวันเรานั่งตุ๊กตุ๊กแน่น 15 คนนี่หว่า~  

@NongNuchGarden  
ในเกาหลีบอกว่า “ทีมเวิร์กไทยสุดยอดที่สุด!” ดูแล้วน้ำตาจิ้ม ㅠㅠ  

ㄴ@SeoulThaiFan  
คนเกาหลีเชียร์ไทยกันเยอะมากเลย!  

@TomYumKing  
คนเกาหลีบอกว่า “ไทยคือมอนสเตอร์ธรรมชาติ” … ภาคภูมิใจไทยแตกกระจาย!  

ㄴ@KimchiThai  
โอปป้าเกาหลีพูดว่า “ไปเกณฑ์ทหารมาแล้วยังสู้ไทยไม่ได้” ㅋㅋ  

@PhuketWarrior  
ทีมไทยผ่านด่านเรืออับปากแบบสบาย ๆ คนเกาหลีขนลุกเลย!  

ㄴ@KrabiBoy  
โตมาในทะเลจะให้แพ้ได้ไง!  

@ChiangMaiQueen  
คนเกาหลีบอกว่า “ไทยร้อน 40 องศายังไม่ตาย” ㅋㅋ  

ㄴ@ThaiStrong  
ชินแล้ว ร้อนขนาดนี้แค่อุ่นเครื่อง!  

@IsanFighter  
ในเกาหลีคอมเมนต์อันดับ 1 บอกว่า “แชมป์ต้องเป็นไทยแน่นอน” … จริงเหรอ?!  

ㄴ@BTSFanThai  
แฟนเกาหลีโหวตไทยแชมป์อันดับ 1 เลยจ้า ㅋㅋㅋ  

@PattayaPrincess  
คนเกาหลีบอกว่า “ไทย ไทยคือ “นักรบที่สู้กับน้ำท่วมและพายุทุกปี” … น้ำตาไหล  

ㄴ@SiamForever  
ขอบคุณที่เชียร์กันนะเกาหลี!  

@SongkranBoy  
โอปป้าเกาหลีตกใจกล้ามเนื้อผู้เล่นไทย… ก็ธรรมชาติล้วน ๆ!  

ㄴ@HangulThai  
คนเกาหลีพูดว่า “เกาหลีศัลยกรรม ไทยธรรมชาติ” ㅋㅋ  

@AyutthayaPower  
ตอนทีมไทยข้ามกำแพง คนเกาหลีลุกขึ้นปรบมือให้ทั้งประเทศ! ปลื้มสุด ๆ  

ㄴ@KoreaLoverTH  
ขอบคุณแฟนด้อมเกาหลีที่เชียร์ไทยหนักมาก!  

@NakornPradoom  
คนเกาหลีบอกว่า “คิดว่าไทยสบายเพราะเป็นพันธมิตรอเมริกา ที่ไหนได้เก่งจริง!”  

ㄴ@ThaiPower2025  
เราใช้ความสามารถจริง ๆ ไม่ได้พูด!  

@SukhumvitKing  
ในเกาหลีตะโกนว่า “Thai Pride สุด ๆ” … ภาคภูมิใจไทยระเบิด!  

ㄴ@GangnamThai  
โอปป้าเกาหลีอธิษฐานให้ไทยชนะทุกวัน ㅋㅋㅋ  

@UbonBeast  
คนเกาหลีบอกว่า “ไทยกินข้าวเหนียวทุกวันแต่แข็งแกร่งมาก” … ตกใจกันใหญ่  

ㄴ@IsanQueen  
ข้าวเหนียวคือพลังชีวิตของเรา!  

@KoratDestroyer  
คนเกาหลีพูดว่า “ถ้าเป็นทีมเกาหลี คงยอมแพ้มานานแล้ว” … ยอมรับเลย  

ㄴ@KPopThai  
แฟนเกาหลีหลงรักทีมไทยกันหมดแล้ว ㅋㅋㅋ  

@SiamFighter  
คอมเมนต์อันดับ 1 ในเกาหลี: “ไทยไม่มีแพ้!” ขอบคุณมากครับ!  

ㄴ@HallyuSiam  
เรา Thai Pride ตลอดไป! รักเกาหลีเหมือนกันนะ!`,
    image: "/2/thailand.png",
  },
  {
    id: 3,
    title:
      "Reaksi Orang Korea terhadap Physical: Asia Episode 1~6 (Terjemahan Indonesia)",
    content: `Ringkasan misi asli Netflix Physical: Asia Episode 1~6  
(Tayang 28 Okt ~ 4 Nov 2025)

1화: 해가 뜨는 곳 → Panjat tembok sampai puncak  
2화: 벼랑 끝 → Tarik karung pasir 50 kg naik bukit  
3화: 난파선 → Lintasi rintangan kapal karam raksasa + lari estafet tim  
4화: 간절한 기도 → Angkat beban 100 kg + lari sprint 400 m  
5화: 수상한 마을 → Duel 1:1 + pertarungan strategi tim  
6화: 넘을 수 없는 벽 → Lewati tembok raksasa + gendong teman 200 kg sampai garis finish!

<Komentar>

@GarudaPrideID  
Orang Korea pada melongo lihat tim Indonesia ㅋㅋㅋ Terima kasih Korea!  

ㄴ@KPopIndo  
Oppa Korea teriak “Indonesia tak terkalahkan!” rame banget ㅋㅋㅋ  

@JokoMacan  
Orang Korea bilang lihat tim kita gendong 200 kg masih senyum… Ya wajar dong!  

ㄴ@JakartaGirl  
Setiap hari kita naik angkot penuh 12 orang~  

@RinaBali  
Di Korea bilang “teamwork Indonesia paling top!” aku sampai nangis ㅠㅠ  

ㄴ@SeoulGaruda  
Orang Korea dukung Indonesia habis-habisan!  

@RendangKing  
Orang Korea bilang “Indonesia monster alami” … Merah Putih meledak!  

ㄴ@KimchiIndo  
Oppa Korea bilang “meski wamil tetap kalah sama Indonesia” ㅋㅋ  

@PapuaWarrior  
Tim kita lewati kapal karam gampang banget, orang Korea merinding semua!  

ㄴ@SurabayaBoy  
Lahir di laut, mana mungkin kalah!  

@BandungQueen  
Orang Korea bilang “Indonesia panas 38° masih lari kenceng” ㅋㅋ  

ㄴ@IndoStrong  
Biasa, panas segini cuma pemanasan!  

@SumatraFighter  
Komentar nomor 1 di Korea: “Juara pasti Indonesia” … beneran nih?!  

ㄴ@BTSFanIndo  
Fans Korea vote Indonesia juara nomor 1 ㅋㅋㅋ  

@BorneoPrincess  
Orang Korea bilang “Indonesia pejuang banjir & gunung meletus tiap tahun” … aku terharu  

ㄴ@NusantaraForever  
Terima kasih dukungannya Korea!  

@BromoBoy  
Oppa Korea kaget lihat otot pemain kita… Ya alamiah bro!  

ㄴ@HangulIndo  
Orang Korea bilang “Korea operasi plastik, Indonesia natural” ㅋㅋ  

@YogyakartaPower  
Pas tim kita lompat tembok, orang Korea berdiri tepuk tangan semua! Bangga banget  

ㄴ@KoreaLoverID  
Terima kasih fandom Korea yang dukung kita gila-gilaan!  

@MedanPride  
Orang Korea bilang “kira Indonesia enak karena sekutu Amerika, ternyata jago beneran!”  

ㄴ@IndoPower2025  
Kami buktikan dengan kekuatan asli!  

@MonasKing  
Di Korea pada teriak “Garuda Pride” … Merah Putih meledak banget!  

ㄴ@GangnamIndo  
Oppa Korea doa setiap hari biar Indonesia juara ㅋㅋㅋ  

@PadangBeast  
Orang Korea bilang “Indonesia tiap hari makan nasi padang tapi kuat banget” … kaget semua  

ㄴ@RendangQueen  
Nasi padang sumber tenaga kita!  

@MakassarDestroyer  
Orang Korea bilang “kalau tim Korea pasti udah nyerah dari tadi” … ngaku kalah  

ㄴ@KPopGaruda  
Fans Korea udah jatuh cinta sama tim kita ㅋㅋㅋ  

@IndonesiaFighter  
Komentar nomor 1 di Korea: “Indonesia tak terkalahkan!” Terima kasih banyak!  

ㄴ@HallyuNusantara  
Kami selalu Garuda Pride! Korea juga kami sayang!`,
    image: "/3/indonesia.png",
  },
];

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  console.log("🔵 slug:", slug);
  const post = postData.find((post) => post.id === parseInt(slug));

  return (
    <div className="container mx-auto p-4">
      <Card className="border-primary shadow-neon">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            {post?.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* <Skeleton className="w-[600px] h-[400px] mb-2" /> */}
          <Image
            src={post?.image || "/placeholder.jpg"}
            alt={post?.title || "placeholder"}
            width={600}
            height={400}
            // loading="lazy"
            className="w-[600px] mb-2"
          />
          <p className="whitespace-pre-line">{post?.content}</p>
        </CardContent>
      </Card>
      {/* Adsterra/PropellerAds 스크립트 위치: 여기에서 <Script> 태그 추가 준비 */}
      <Script src="https://example.com/adsterra.js" strategy="lazyOnload" />
      {/* 또는 PropellerAds 스크립트 */}
    </div>
  );
}
