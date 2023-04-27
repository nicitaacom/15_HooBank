export function Features ({children,featureClassName}) {


return (
<section className={`py-4 mb-32 flex gap-3 ${featureClassName}`}>
  {children}
</section>
)
}

