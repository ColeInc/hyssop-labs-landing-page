"use client";

import { useEffect, useRef } from "react";

// Declare the custom element for TypeScript
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
                'media-id': string;
                aspect: string;
            }, HTMLElement>;
        }
    }
}

interface WistiaVideoProps {
    mediaId: string;
    aspect: string;
}

export default function WistiaVideo({ mediaId, aspect }: WistiaVideoProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load the main Wistia player script
        const script1 = document.createElement('script');
        script1.src = 'https://fast.wistia.com/player.js';
        script1.async = true;
        document.body.appendChild(script1);

        // Load the specific video script
        const script2 = document.createElement('script');
        script2.src = `https://fast.wistia.com/embed/${mediaId}.js`;
        script2.async = true;
        script2.type = 'module';
        document.body.appendChild(script2);

        // Create container and inject the player
        if (containerRef.current) {
            const playerElement = document.createElement('wistia-player');
            playerElement.setAttribute('media-id', mediaId);
            playerElement.setAttribute('aspect', aspect);
            containerRef.current.appendChild(playerElement);
        }

        return () => {
            // Clean up scripts when component unmounts
            if (document.body.contains(script1)) {
                document.body.removeChild(script1);
            }
            if (document.body.contains(script2)) {
                document.body.removeChild(script2);
            }
            // Clear the container
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [mediaId, aspect]);

    return (
        <>
            <style jsx>{`
        .wistia-container:empty {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
            <div
                ref={containerRef}
                className="wistia-container"
                style={{ width: '100%', height: '100%' }}
            />
        </>
    );
} 