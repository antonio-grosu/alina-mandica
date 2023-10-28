function Terapie() {
  return (
    <div className="grid-cols-1 md:grid-cols-2 grid gap-12">
      <div>
        <h1 className="title text-2xl md:inline-block">Psihologie Clinica</h1>
        <div className="px-4 py-2 mt-4 md:mt-0 md:ml-4 title bg-teal-500 text-teal-50 inline-block">
          250 Ron / 60 min
        </div>
        <div className="grid md:grid-cols-2 mt-8 gap-8">
          <p className="text text-teal-950">
            <span className="underline block">
              Eliberare rapoarte psihologice
            </span>
            Evaluarea este efectuată în baza interviului clinic și a unor
            instrumente de testare standardizate și validate științific :
          </p>
          <p className="text text-teal-950">
            Inventarul Clinic Multiaxial Millon – MCMI III, pentru evaluarea
            tulburărilor din Axa I și Axa II
          </p>
          <p className="text text-teal-950">
            Inventarul de Depresie Beck – pentru evaluarea depresiei
          </p>
          <p className="text text-teal-950">
            În vederea unui psihodiagnostic și a stabilirii unei intervenții
            terapeutice cât mai potrivite pentru client, sunt necesare minim 2
            sedinte
          </p>
        </div>
      </div>
      <div>
        <h1 className="title text-2xl inline-block">Consiliere psihologică</h1>
        <div className="px-4 py-2 mt-4 md:mt-0 md:ml-4 title bg-teal-500 text-teal-50 inline-block">
          200 Ron / 50 min
        </div>
        <div className="grid md:grid-cols-2 mt-8 gap-8">
          <p className="text text-teal-950">
            Intervenție terapeutică centrată pe rezolvarea unei probleme
            actuale, însă fără a restructura personalitatea{" "}
          </p>
        </div>
      </div>
      <div className="mb-12">
        <h1 className="title text-2xl inline-block">Consiliere psihologică</h1>
        <div className="px-4 py-2 mt-4 md:mt-0 md:ml-4 title bg-teal-500 text-teal-50 inline-block">
          250 Ron / 50 min
        </div>
        <div className="grid md:grid-cols-2 mt-8 gap-8">
          <p className="text text-teal-950">
            Intervenție terapeutică de scurtă și lungă durată (terapii
            cognitiv-comportamentale)
          </p>
        </div>
      </div>
    </div>
  );
}
export default Terapie;
