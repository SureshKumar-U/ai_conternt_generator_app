import { NotebookPen, Sparkles, CircleCheck } from 'lucide-react';
import StepCard from './StepCard';



const HowItWorksSection = () => {



    const STEPS = [
        { icon: <NotebookPen />, title: 'Prompt', desc: "Describe your vision with simple text. Our advanced contextual engine understands nuance and intent." },
        { icon: <Sparkles />, title: 'Generate', desc: "    Watch as our specialized models synthesize your ideas into structured, high-quality content instantly." },
        { icon: <CircleCheck />, title: 'Perfect', desc: "Refine and export. Edit seamlessly within our technical grid environment tailored for enterprise precision." },
    ];



    return (
        <>

            <section className="px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-xl space-y-xs">
                        <h2 className="font-semibold  text-xl text-on-surface">How it Works</h2>
                        <p className=" text-lg text-on-surface-variant">Three simple steps to structured intelligence.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">

                        {STEPS?.map((step: any, index: number) => {
                            return (
                                <>
                                    <StepCard icon={step.icon} title={step.title} description={step.desc} />
                                </>
                            )

                        })}

                    </div>
                </div>
            </section>
        </>
    )

}

export default HowItWorksSection