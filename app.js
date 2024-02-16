

const menuBtn = document.querySelector('.mobile-menu-logo')
const menuList = document.querySelector('.mobile-menu-list')
const bookmarkImg = document.querySelector('.bookmark-img')
const bookmark = document.querySelector('.bookmark-side')
const backPrjBtn = document.querySelector('.master-back-btn')
const modal = document.querySelector('.modal-part')
const modalClose = document.querySelector('.close-modal')
const continueBtn = document.querySelectorAll('.selected-btn')
const successModal = document.querySelector('.success-modal')
const successClose = document.querySelector('.success-btn')
const modalSections = document.querySelectorAll('.modal-section')
const radioBtns = document.querySelectorAll('#modal-input')
const selectReward = document.querySelectorAll('.select-reward')
const inputMoney = document.querySelectorAll('.selected-input')
const totalPrice = document.querySelector('.price-header')
const bar = document.querySelector('#percentage')
let nextEl;
// let totalPriceValue;
// let totalPriceNum;

menuBtn.addEventListener('click', function(e) {
    menuList.classList.toggle('mobile-menu-active')
})


bookmark.addEventListener('mouseover', function(e) {
    bookmarkImg.src =  './images/icon-bookmark-grey.svg'
})
bookmark.addEventListener('mouseleave', function(e) {
    bookmarkImg.src =  './images/icon-bookmark.svg'
})

bookmarkImg.addEventListener('click', function(e){
    bookmarkImg.classList.toggle('img-transition')
    bookmark.innerHTML = 'Bookmarked!'
    bookmark.style.color = 'black'
    if(!bookmarkImg.classList.contains('img-transition')) {
        bookmark.innerHTML = 'Bookmark'
        bookmark.style.color = 'grey'
    }
})

const activeModal = () => {
    backPrjBtn.addEventListener('click', function(e) {
        modal.classList.add('modal-active')

        if(modal.classList.contains('modal-active')) {
            document.querySelector('.container').style.opacity = '0.5'
            document.querySelector('header').style.opacity = '0.5'
        }
    })
    
    modalClose.addEventListener('click', function(e) {
        modal.classList.remove('modal-active')
        if(!modal.classList.contains('modal-active')) {
            document.querySelector('.container').style.opacity = '1'
            document.querySelector('header').style.opacity = '1'
        }
    })


    for( let i = 0; i < radioBtns.length; i++) {
        radioBtns[i].addEventListener('click', function(e) {
            radioBtns[3].checked = false
            if(!radioBtns[i].checked === true) {
                alert ('Radio button must be checked')
            } else {
                continueBtn[i].addEventListener('click', function(e) {
                    nextEl = continueBtn[i].previousElementSibling
                    let parsedEl = parseInt(nextEl.value)    
                    //toto tu urobit ako funckciu aby som ju mohla pouzit aj pri znovu pridani     
                    if(nextEl.id === 'first') {
                        if(parsedEl >= 25 && radioBtns[i].checked === true) {
                            successModal.classList.add('success-modal-active')
                             if(successModal.classList.contains('success-modal-active')) {
                                modal.classList.remove('modal-active')
                                document.querySelector('.container').style.opacity = '1'
                                document.querySelector('header').style.opacity = '1'
                                let totalPriceValue = Number(totalPrice.innerHTML)
                                let sum = totalPriceValue + parsedEl
                                let result =+ sum
                                totalPrice.innerHTML = result
                                let barResult = bar.value
                                let resultToEl = barResult =+ result
                                bar.value = resultToEl
                            }
                        } else if(parsedEl < 25) {
                            alert ('Your pledge must be greater than 25$')
                        }
                    }
                    // nextEl.value = ''

                    if(nextEl.id === 'second') {
                        if(parsedEl >= 75 && radioBtns[i].checked === true) {
                            successModal.classList.add('success-modal-active')
                            if(successModal.classList.contains('success-modal-active')) {
                                modal.classList.remove('modal-active')
                                document.querySelector('.container').style.opacity = '1'
                                document.querySelector('header').style.opacity = '1'
                                let totalPriceValue = Number(totalPrice.innerHTML)
                                let sum = totalPriceValue + parsedEl
                                let result =+ sum
                                totalPrice.innerHTML = result
                                let barResult = bar.value
                                let resultToEl = barResult =+ result
                                bar.value = resultToEl
                            }
                        } else if(parsedEl < 75 ){
                            alert ('Your pledge must be greater than 75$')
                        }
                    }
    
                    if(nextEl.id === 'hidden') {
                        if(radioBtns[i].checked === true ) {
                            successModal.classList.add('success-modal-active')
                            modal.classList.remove('modal-active')
                            document.querySelector('.container').style.opacity = '1'
                            document.querySelector('header').style.opacity = '1'
                        }
                    }
            
                    if(radioBtns[i].checked === false) {
                        successModal.classList.remove('success-modal-active')
                    }
    
                     nextEl.value = ''
                     resetModal()
    
                })
                
    
            }
            
            // continueBtn[i].addEventListener('click', function(e) {
            //     nextEl = continueBtn[i].previousElementSibling
            //     let parsedEl = parseInt(nextEl.value)    
            //     //toto tu urobit ako funckciu aby som ju mohla pouzit aj pri znovu pridani     
            //     if(nextEl.id === 'first') {
            //         if(parsedEl >= 25 && radioBtns[i].checked === true) {
            //             successModal.classList.add('success-modal-active')
            //         } else if(parsedEl < 25) {
            //             alert ('Your pledge must be greater than 25$')
            //         }
            //         // } else if(!radioBtns[i].checked === true) {
            //         //     alert ('Radio button must be checked')
            //         // }
            //     }

            //     if(nextEl.id === 'second') {
            //         if(parsedEl >= 75 && radioBtns[i].checked === true) {
            //             successModal.classList.add('success-modal-active')
            //         } else {
            //             alert ('Your pledge must be greater than 75$ nd radio button checked')
            //         }
            //     }

            //     if(nextEl.id === 'hidden') {
            //         if(radioBtns[i].checked === true ) {
            //             successModal.classList.add('success-modal-active')
            //         }
            //     }

            //     if(successModal.classList.contains('success-modal-active')) {
            //         modal.classList.remove('modal-active')
            //         document.querySelector('.container').style.opacity = '1'
            //         document.querySelector('header').style.opacity = '1'
            //         totalPriceValue= totalPrice.innerHTML
            //         totalPriceNum = Number(totalPriceValue)
            //         //dorobit lebo je to 89 tisic ale hadze to k tomu 89.... !!!!!!
            //         console.log(totalPriceNum + parsedEl)
            //         // totalPrice.innerHTML += parsedEl
            //     }

        
            //     if(radioBtns[i].checked === false) {
            //         successModal.classList.remove('success-modal-active')
            //     }

            //     resetModal()

            //     nextEl.value = ''
            // })
            modalSections.forEach( (oneSection) => {
                oneSection.classList.remove('active')
                radioBtns[i].parentElement.parentElement.classList.add('active')
            })
        })    
    }

    successClose.addEventListener('click', function(e) {
        successModal.classList.remove('success-modal-active')
    })

    selectReward.forEach( (oneSelect) =>{
        oneSelect.addEventListener('click', function(e){
            modal.classList.add('modal-active')
        })
    })
}

activeModal()

const resetModal = () => {
    if(!modal.classList.contains('modal-active')) {
                    radioBtns.forEach( (oneBtn) => {
                        oneBtn.checked = 'false'
                    })
                    modalSections.forEach( (oneSection) => {
                        oneSection.classList.remove('active')
                    })
                }
        
}