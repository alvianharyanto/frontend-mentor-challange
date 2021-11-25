const app = new Vue({
  el: '#app',
  data:{
    solutions: [
      {
        id: 1,
        projectName: 'Article Preview Comonent',
        techStacks: ['HTML', 'CSS', 'JS'],
        previewImageLink: './Article-preview-component/design/desktop-preview.jpg',
        liveViewLink: 'https://article-preview-component-five-xi.vercel.app/'
      },
      {
        id: 2,
        projectName: 'FAQ Accordion Card Page',
        techStacks: ['HTML', 'CSS', 'JS'],
        previewImageLink: './faq-accordion-card-main/design/desktop-preview.jpg',
        liveViewLink: 'https://accordion-card-one.vercel.app/'
      },
      {
        id: 3,
        projectName: 'Ping Coming Soon',
        techStacks: ['HTML', 'CSS', 'JS'],
        previewImageLink: './ping-coming-soon-page-master/design/desktop-preview.jpg',
        liveViewLink: 'https://ping-coming-soon-page-omega.vercel.app/'
      },
      {
        id: 4,
        projectName: 'Social Media Dasboard',
        techStacks: ['HTML', 'CSS', 'ReactJs'],
        previewImageLink: './media-social-dasboard/design/desktop-preview.jpg',
        liveViewLink: 'https://media-social-dasboard.vercel.app/'
      },
      {
        id: 5,
        projectName: 'Social Proof Section',
        techStacks: ['HTML', 'CSS'],
        previewImageLink: './social-proof-section-master/design/desktop-preview.jpg',
        liveViewLink: 'https://frontend-mentor-social-proof-section-omega.vercel.app/'
      },
    ]
    }
})