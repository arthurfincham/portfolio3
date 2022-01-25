export default function ResponsiveImage({ image, addImage }) {
  const small = `/images/${image}Small.webp`;
  const medium = `/images/${image}Medium.webp`;
  const large = `/images/${image}Large.webp`;
  return (
    <img
      src={large}
      srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`}
      className="w-full rounded-b-lg shadow-lg projectImage"
      alt={image}
      key={image}
      onLoad={(e) => addImage(image)}
      height="100%"
      width="100%"
    />
  );
}
