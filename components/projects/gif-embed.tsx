import Image from 'next/image';

interface GifEmbedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const GifEmbed: React.FC<GifEmbedProps> = ({ 
  src, 
  alt, 
  width = 800, 
  height = 450 
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-100 dark:bg-gray-800">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-contain"
          unoptimized // Required for GIFs to maintain animation
          priority
        />
      </div>
    </div>
  );
};

export default GifEmbed;