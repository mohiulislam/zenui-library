const CodePreview = ({ settings }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
    <code>{`<LazyLoadImage
  src="your-image.jpg"
  alt="Your alt text"
  placeholderType="${settings.placeholderType}"
  ${settings.placeholderType === 'effect' ? `effectType="${settings.effectType}"
  effectAmount={${settings.effectAmount}}` : ''}
  optimize={${settings.optimize}}
  ${settings.optimize ? `quality={${settings.quality}}` : ''}
  offset={${settings.offset}}
  useIntersectionObserver={${settings.useIntersectionObserver}}
/>`}</code>
  </pre>
);