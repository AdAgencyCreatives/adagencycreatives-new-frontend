'use client';

const AnimatedBackdrop = ({className = ''}) => {

    return (
        <div className={`animated-backdrop absolute inset-0 absolute h-full overflow-hidden mx-auto max-sm:w-[90%] max-sm:py-0 z-0 ${className}`}>
            <video autoPlay loop muted playsInline className="w-full h-full object-cover max-sm:rounded-[50%] max-sm:opacity-100 opacity-50">
                <source src="/videos/resources-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default AnimatedBackdrop;