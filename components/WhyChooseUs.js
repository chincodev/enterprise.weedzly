import React from 'react';

const WhyChooseUs = (props) => {
    return (
        <div className="why-choose why-choose-two pt-100 pb-70">
            <div className="container-fluid">
                {
                    props.selected === 'brands' ? (
                        <>
                        
                        <div className="section-title text-center">
         
                    <h2>Targeted Customer Advertising</h2>
                    <p>When shoppers are browsing Weedzly, your brand will appear as featured - establishing credibility and planting a thought in your future customers' heads. Select certain cities to appear as featured, you can target potential cities where you know you need to increase awareness or select cities where you already are established to maintain and enforce your brand awareness.</p>
                </div>

                

                <div className="shapes">
                    <img src="/images/shapes/shape1.png" alt="shape" />
                    <img src="/images/shapes/shape2.png" alt="shape" />
                    <img src="/images/shapes/shape3.png" alt="shape" />
                    <img src="/images/shapes/shape4.png" alt="shape" />
                    <img src="/images/shapes/shape5.png" alt="shape" />
                    <img src="/images/shapes/shape6.png" alt="shape" />
                    <img src="/images/shapes/shape7.png" alt="shape" />
                </div>
                        </>
                    ) : (
                        <>
                        <div className="section-title text-center">
         
         <h2>Interact with Customers</h2>
         <p>Engage with customers as they leave reviews and establish credibility with your potential customers. It’s said that 78% of people trust online reviews as much as a recommendation from a friend or family member. Respond to reviews and show potential shoppers that you're listening to and care about your customers.</p>
     </div>

     <div className="row align-items-center">
         <div className="col-lg-6">
             <div className="why-choose-img">
                 <img src="/images/saas-landing/saas-laptop.png" alt="why choose image" />
             </div>
         </div>

         <div className="col-lg-5">
             <div className="why-choose-text">
                 {/* <div className="media">
                     <i className="flaticon-computer mr-3"></i>
                     <div className="media-body">
                         <h3 className="mt-0">Interact With Customers</h3>
                         
                     </div>
                 </div> */}

                 <div className="media">
                     <i className="flaticon-layers mr-3"></i>
                     <div className="media-body">
                         <h3 className="mt-0">Offer Deals</h3>
                         Cannabis shoppers love to save money, so offering deals and discounts is a no-brainer if you want to increase sales. You can utilize our custom deals tool to create a variety of different types of deals. 
                     </div>
                 </div>

                 <div className="media">
                     <i className="flaticon-late mr-3"></i>
                     <div className="media-body">
                         <h3 className="mt-0">Get Premium Placement</h3>
                         Cannabis shoppers are browsing Weedzly when looking to find a deal or make their next purchase. 
Whenever a shopper lands on a product that you offer, have your business appear featured over your competitors. Customers are far more likely to select and checkout with the first option they see.
                     </div>
                 </div>
             </div>
         </div>
     </div>

     <div className="shapes">
         <img src="/images/shapes/shape1.png" alt="shape" />
         <img src="/images/shapes/shape2.png" alt="shape" />
         <img src="/images/shapes/shape3.png" alt="shape" />
         <img src="/images/shapes/shape4.png" alt="shape" />
         <img src="/images/shapes/shape5.png" alt="shape" />
         <img src="/images/shapes/shape6.png" alt="shape" />
         <img src="/images/shapes/shape7.png" alt="shape" />
     </div>
                            
                        </>
                    )
                }
                
            </div>
        </div>
    )
}

export default WhyChooseUs;