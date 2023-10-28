"use client";
import Image from "next/image";
import Card from "./Card";
function Poveste() {
  return (
    <div className="my-24 relative  grid-cols-1 grid gap-8 w-full mx-auto">
      <Image
        src="/Questions-pana.svg"
        className="w-64  md:absolute hidden md:block  left-0 top-4 "
        width={400}
        height={0}
      />
      <Image
        src="/Questions-cuate.svg"
        className="w-64  md:absolute hidden md:block right-0 top-4 "
        width={400}
        height={0}
      />
      <Card
        titlu="Facultate"
        descriere="Am terminat Facultatea de Psihologie în 2008.
        Am ales atunci siguranța financiară în locul vocației, pe fondul și a unei lipse de încredere în forțele proprii. Pandemia a echilibrat însă totul. Experiențele personale m-au făcut să merg la psiholog și să caut răspunsuri la întrebări aparent fără răspuns. Și le-am găsit! Culmea este că făcusem intuitiv tot ceea ce era necesar ca să mă vindec, dar nu vedeam asta pentru că nu aveam încredere în mine! Impactul a fost așa de puternic încât, într-un moment în care mulți oameni se mai gândesc doar la vacanțe sau poate chiar la pensie, am luat hotărârea să adaug un nou capitol important în Cartea Vieții și am ales să mă înscriu în programul de Master de Terapii Cognitiv-Comportamentale al Universității București - Facultatea de Psihologie și Științele Educației, astfel încât să pot ajuta, la rândul meu, alți oameni să depășească momentele dificile din viață."
      />
      <Card
        titlu="Alegerea Mea"
        descriere="A fost o alegere asumată și știu că acest capitol va rămâne deschis multă vreme de aici încolo, pentru că oamenii sunt uimitori, iar psihicul uman este fascinant: în fiecare zi învăț ceva nou și în fiecare zi mă dezvolt personal. Și mai știu căfiecare om cu care lucrez va putea mai târziu să îi
impacteze pozitiv pe alții. Suntem interconectați, așa că o acțiune aparent neînsemnată poate avea
un impact uriaș pe termen lung. Ceea ce cred că ar trebui să ne ne responsabilizeze - să avem grijă de sănătatea noastră mintală și astfel să o protejăm și pe a celor din jurul nostru."
      />
      <Card
        titlu="Începutul"
        descriere="Prin urmare, am ales să lucrez cu adulți pe probleme de anxietate, atacuri de panică, depresie, stimă de sine scăzută, probleme de cuplu, probleme la locul de muncă, procrastinare, tulburări de personalitate, probleme de dinamică familială, tulburări de adaptare socială, bullying, orientare sexuală, traumă.
        Am folosit terapia cognitiv-comportamentală clasică, terapia centrată pe soluții, terapia centrată pe problemă, terapia ACT, tehnici de relaxare și mindfulness.
        Iar rezultatele au fost confirmarea unei alegeri corecte."
      />
      <Card
        titlu="Clientii Mei"
        descriere="Clienții mi-au spus că sunt diferită, că am o abordare atipică și asta le place, îi face să se simtă mai confortabil, înțeleși și acceptați, chiar și în momentele de intensitate emoțională mai puternică. A fost cel mai frumos compliment pe care l-am primit!
        Le sunt recunoscătoare clienților mei pentru că mi-au dat voie să intru în spațiul lor cel mai intim, să le simt emoțiile și să trăiesc bucuria reușitei alături de ei. MULȚUMESC! ❤
        Am ales varianta online pentru că oferă clienților un grad de intimitate și confort mai mare decât într-un cabinet și se pot deschide mai ușor. În plus, îmi pot accesa serviciile de oriunde, inclusiv de peste hotare sau dintr-o pauză de masă, la locul de muncă."
      />
    </div>
  );
}
export default Poveste;
