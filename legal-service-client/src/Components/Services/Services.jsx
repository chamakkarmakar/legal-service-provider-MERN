import React from 'react'

const Services = () => {
    const services = [
        {
            'id': 1,
            'title':'Public Notary',
            'url': 'https://img.freepik.com/free-photo/view-3d-justice-gavel_23-2151228069.jpg?t=st=1716271522~exp=1716275122~hmac=82c3052bee36e65f8f229747e6914dd4a2061c0a40db65d0f115928d1598ebc3&w=740'
        },
        {
            'id': 2,
            'title':'Tax Document',
            'url': 'https://img.freepik.com/premium-photo/midsection-lawyer-working-office_1048944-18183743.jpg?w=826'
        },
        {
            'id': 3,
            'title':'Business Notary',
            'url': 'https://img.freepik.com/premium-photo/lawyer-suit-discusses-document-with-judge_674594-12205.jpg?w=826'
        },
        {
            'id': 4,
            'title':'Private Notary',
            'url': 'https://img.freepik.com/free-photo/photorealistic-lawyer-environment_23-2151152240.jpg?t=st=1716271800~exp=1716275400~hmac=d7354fb01b3fe7ac7a7ec539df5a28e3b8445d0bd7fcf65aa510b534963d961e&w=740'
        },
        {
            'id': 5,
            'title':'Real Estates Form',
            'url': 'https://img.freepik.com/free-photo/vintage-style-people-working-office-with-computers_23-2149850989.jpg?t=st=1716271903~exp=1716275503~hmac=6faacbbd18502fd3440cced9b72f8275d25305460ab5c18e0a0f33dc8ed91bb6&w=740'
        },
        {
            'id': 6,
            'title':'Family Document',
            'url': 'https://img.freepik.com/premium-photo/paper-cut-family-judge-gavel-book-other-objects-family-law_220873-10046.jpg?w=740'
        },
        {
            'id': 7,
            'title':'House Document',
            'url': 'https://img.freepik.com/premium-photo/close-up-lawyer-client-having-meeting-desk_1048944-25270719.jpg?w=740'
        },
        {
            'id': 8,
            'title':'Online Notary',
            'url': 'https://img.freepik.com/premium-photo/smart-legal-advice-website-people-searching-astute-law-knowledge_31965-133037.jpg?w=900'
        }

    ]
    return (
        <div className='bg-zinc-300 mt-20 pb-32 pt-20'>
            <div className="w-10/12 mx-auto">

                <div className='text-center md:w-3/5 w-full mx-auto pb-20 font-serif'>
                    <p className='text-amber-600 text-md'>Our Services</p>
                    <h2 className='md:text-5xl text-3xl'>Creative Solutions For Legal Problems</h2>
                </div>
                
                <div className='grid md:grid-cols-4 grid-cols-1 gap-x-10 gap-y-32'>
                    {
                        services.map(service =>
                            <div key={service.id} className='text-center'>
                                <img src={service.url} alt="" className='h-full' />
                                <h2 className='text-amber-600 text-xl mt-4'>{service.title}</h2>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Services
