export default property => property.toLowerCase().replace('-ms-', 'ms-').replace(/-(.)/g, (match, p1) => p1.toUpperCase())
