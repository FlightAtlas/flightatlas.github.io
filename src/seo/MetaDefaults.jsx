import { Helmet } from 'react-helmet-async'

const defaultMeta = {
  title: 'Flight Atlas — Robotics, Vision, and Tracking Consulting',
  description: 'Flight Atlas builds perception platforms, ROS2 infrastructure, and GPS/INS fusion that scale from prototype to fielded systems. Government-ready robotics consulting.',
  keywords: 'robotics consulting, ROS2, computer vision, GPS/INS fusion, autonomous systems, SBIR, government contracting',
  url: 'https://flightatlas.com',
  image: 'https://flightatlas.com/og-image.jpg'
}

function MetaDefaults({ 
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  url = defaultMeta.url,
  image = defaultMeta.image
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:image" content={image} />
      
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default MetaDefaults