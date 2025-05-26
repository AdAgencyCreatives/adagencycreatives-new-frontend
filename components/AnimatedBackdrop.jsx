'use client';

const AnimatedBackdrop = ({className = ''}) => {

    const backdrop_expanded = "md:w-[120%] md:h-[120%] md:left-[50%] md:top-[50%] md:transform-[translate(-50%,-50%)]";
    
    return (
        <div className={`animated-backdrop absolute inset-0 absolute h-full overflow-hidden mx-auto max-sm:w-[60%] max-sm:py-12 z-0 ${className}`}>
            <video autoPlay loop muted playsInline className="w-full h-full object-cover max-sm:rounded-[50%] opacity-50">
                <source src="/videos/resources-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AnimatedBackdrop;