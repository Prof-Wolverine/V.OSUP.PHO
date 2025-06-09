/**
 * PowerSuplementos - Script JavaScript
 * Autor: Desenvolvedor
 * Versão: 1.0
 * Data: 07/06/2025
 */

// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todos os componentes
    initMobileMenu();
    initSlider();
    initTestimonialSlider();
    initFaqAccordion();
    initScrollToTop();
    initCategoryNavigation();
    initFormValidation();
});

/**
 * Menu Mobile
 * Controla a abertura e fechamento do menu em dispositivos móveis
 */
function initMobileMenu() {
    const btnMobile = document.getElementById('btn-mobile');
    const mainNav = document.getElementById('main-nav');
    const menuLinks = document.querySelectorAll('#main-nav a');
    
    if (!btnMobile) return;
    
    btnMobile.addEventListener('click', function() {
        const isExpanded = btnMobile.getAttribute('aria-expanded') === 'true';
        btnMobile.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    });
    
    // Fechar menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            btnMobile.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Fechar menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (!mainNav.contains(event.target) && !btnMobile.contains(event.target) && mainNav.classList.contains('active')) {
            btnMobile.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Slider Principal
 * Controla o slider/carrossel da página inicial
 */
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let slideInterval;
    
    // Função para mostrar um slide específico
    function showSlide(index) {
        // Remover classe active de todos os slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Adicionar classe active ao slide atual
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Função para avançar para o próximo slide
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    // Função para voltar para o slide anterior
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    }
    
    // Iniciar slideshow automático
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Parar slideshow automático
    function stopSlideshow() {
        clearInterval(slideInterval);
    }
    
    // Adicionar event listeners aos botões
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            stopSlideshow();
            startSlideshow();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            stopSlideshow();
            startSlideshow();
        });
    }
    
    // Adicionar event listeners aos dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            stopSlideshow();
            startSlideshow();
        });
    });
    
    // Pausar slideshow ao passar o mouse sobre o slider
    const sliderContainer = document.querySelector('.banner-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', stopSlideshow);
        sliderContainer.addEventListener('mouseleave', startSlideshow);
    }
    
    // Iniciar slideshow
    startSlideshow();
}

/**
 * Slider de Depoimentos
 * Controla o slider de depoimentos na página Quem Somos
 */
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const prevBtn = document.querySelector('.testimonial-btn.prev');
    const nextBtn = document.querySelector('.testimonial-btn.next');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let slideInterval;
    
    // Função para mostrar um depoimento específico
    function showSlide(index) {
        // Remover classe active de todos os slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Adicionar classe active ao slide atual
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Função para avançar para o próximo depoimento
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        showSlide(nextIndex);
    }
    
    // Função para voltar para o depoimento anterior
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        showSlide(prevIndex);
    }
    
    // Iniciar slideshow automático
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 6000);
    }
    
    // Parar slideshow automático
    function stopSlideshow() {
        clearInterval(slideInterval);
    }
    
    // Adicionar event listeners aos botões
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            stopSlideshow();
            startSlideshow();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            stopSlideshow();
            startSlideshow();
        });
    }
    
    // Adicionar event listeners aos dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            stopSlideshow();
            startSlideshow();
        });
    });
    
    // Iniciar slideshow
    startSlideshow();
}

/**
 * FAQ Accordion
 * Controla a abertura e fechamento dos itens de FAQ
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length === 0) return;
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar o estado do item atual
            item.classList.toggle('active');
        });
    });
}

/**
 * Botão Voltar ao Topo
 * Controla a exibição e funcionalidade do botão de voltar ao topo
 */
function initScrollToTop() {
    const btnTopo = document.getElementById('btn-topo');
    
    if (!btnTopo) return;
    
    // Mostrar/ocultar botão com base na posição de rolagem
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnTopo.classList.add('visible');
        } else {
            btnTopo.classList.remove('visible');
        }
    });
    
    // Rolar para o topo ao clicar no botão
    btnTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Navegação por Categorias
 * Controla a navegação e filtragem de produtos por categoria
 */
function initCategoryNavigation() {
    const categoryLinks = document.querySelectorAll('.category-nav a');
    
    if (categoryLinks.length === 0) return;
    
    // Adicionar event listeners aos links de categoria
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Se estiver na página inicial, evitar o comportamento padrão
            if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                event.preventDefault();
                
                // Remover classe active de todos os links
                categoryLinks.forEach(otherLink => otherLink.classList.remove('active'));
                
                // Adicionar classe active ao link clicado
                link.classList.add('active');
                
                // Obter a categoria selecionada
                const category = link.getAttribute('data-category');
                
                // Rolar até a seção da categoria
                const categorySection = document.getElementById(category);
                if (categorySection) {
                    categorySection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Destacar categoria atual com base na URL
    const currentHash = window.location.hash.substring(1);
    if (currentHash) {
        categoryLinks.forEach(link => {
            const category = link.getAttribute('data-category');
            if (category === currentHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

/**
 * Validação de Formulários
 * Valida os formulários antes do envio
 */
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    // Validação do formulário de contato
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            const privacy = document.getElementById('privacy');
            
            // Validar nome
            if (!name.value.trim()) {
                showError(name, 'Por favor, informe seu nome completo');
                isValid = false;
            } else {
                removeError(name);
            }
            
            // Validar e-mail
            if (!validateEmail(email.value)) {
                showError(email, 'Por favor, informe um e-mail válido');
                isValid = false;
            } else {
                removeError(email);
            }
            
            // Validar assunto
            if (!subject.value) {
                showError(subject, 'Por favor, selecione um assunto');
                isValid = false;
            } else {
                removeError(subject);
            }
            
            // Validar mensagem
            if (!message.value.trim()) {
                showError(message, 'Por favor, escreva sua mensagem');
                isValid = false;
            } else {
                removeError(message);
            }
            
            // Validar checkbox de privacidade
            if (!privacy.checked) {
                showError(privacy, 'Você precisa concordar com a Política de Privacidade');
                isValid = false;
            } else {
                removeError(privacy);
            }
            
            // Se o formulário for válido, simular envio
            if (isValid) {
                // Aqui seria feita a integração com backend para envio real
                // Simulação de envio bem-sucedido
                contactForm.reset();
                showSuccessMessage(contactForm, 'Mensagem enviada com sucesso! Em breve entraremos em contato.');
            }
        });
    }
    
    // Validação dos formulários de newsletter
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            
            if (!validateEmail(emailInput.value)) {
                showError(emailInput, 'Por favor, informe um e-mail válido');
            } else {
                removeError(emailInput);
                // Simulação de cadastro bem-sucedido
                form.reset();
                showSuccessMessage(form, 'E-mail cadastrado com sucesso!');
            }
        });
    });
}

/**
 * Funções auxiliares para validação de formulários
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function showError(input, message) {
    // Remover mensagem de erro existente
    removeError(input);
    
    // Criar elemento de mensagem de erro
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#dc3545';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '5px';
    
    // Adicionar borda vermelha ao input
    input.style.borderColor = '#dc3545';
    
    // Inserir mensagem após o input
    if (input.type === 'checkbox') {
        input.parentElement.appendChild(errorElement);
    } else {
        input.parentElement.appendChild(errorElement);
    }
}

function removeError(input) {
    // Remover borda vermelha
    input.style.borderColor = '';
    
    // Remover mensagem de erro
    const parent = input.type === 'checkbox' ? input.parentElement : input.parentElement;
    const errorElement = parent.querySelector('.error-message');
    if (errorElement) {
        parent.removeChild(errorElement);
    }
}

function showSuccessMessage(form, message) {
    // Remover mensagem de sucesso existente
    const existingSuccess = form.querySelector('.success-message');
    if (existingSuccess) {
        form.removeChild(existingSuccess);
    }
    
    // Criar elemento de mensagem de sucesso
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.textContent = message;
    successElement.style.color = '#28a745';
    successElement.style.fontSize = '0.875rem';
    successElement.style.marginTop = '10px';
    successElement.style.padding = '10px';
    successElement.style.backgroundColor = 'rgba(40, 167, 69, 0.1)';
    successElement.style.borderRadius = '4px';
    
    // Inserir mensagem após o formulário
    form.appendChild(successElement);
    
    // Remover mensagem após 5 segundos
    setTimeout(() => {
        if (form.contains(successElement)) {
            form.removeChild(successElement);
        }
    }, 5000);
}

/**
 * Adicionar ao Carrinho
 * Simula a funcionalidade de adicionar produtos ao carrinho
 */
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product-card .btn-primary');
    const cartCount = document.querySelector('.cart-count');
    
    if (addToCartButtons.length === 0 || !cartCount) return;
    
    // Inicializar contador do carrinho
    let count = localStorage.getItem('cartCount') || 0;
    cartCount.textContent = count;
    
    // Adicionar event listeners aos botões de adicionar ao carrinho
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Incrementar contador
            count = parseInt(count) + 1;
            
            // Atualizar exibição
            cartCount.textContent = count;
            
            // Salvar no localStorage
            localStorage.setItem('cartCount', count);
            
            // Obter informações do produto
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // Mostrar mensagem de confirmação
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `
                <div class="toast-content">
                    <i class="fas fa-check-circle"></i>
                    <div class="toast-message">
                        <span>${productName}</span> adicionado ao carrinho!
                    </div>
                </div>
                <button class="toast-close"><i class="fas fa-times"></i></button>
            `;
            
            // Estilizar toast
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.right = '20px';
            toast.style.backgroundColor = '#28a745';
            toast.style.color = 'white';
            toast.style.padding = '15px';
            toast.style.borderRadius = '4px';
            toast.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            toast.style.display = 'flex';
            toast.style.alignItems = 'center';
            toast.style.justifyContent = 'space-between';
            toast.style.zIndex = '9999';
            toast.style.minWidth = '300px';
            toast.style.transform = 'translateY(100px)';
            toast.style.opacity = '0';
            toast.style.transition = 'all 0.3s ease';
            
            // Adicionar toast ao body
            document.body.appendChild(toast);
            
            // Animar entrada
            setTimeout(() => {
                toast.style.transform = 'translateY(0)';
                toast.style.opacity = '1';
            }, 10);
            
            // Adicionar event listener para fechar toast
            const closeBtn = toast.querySelector('.toast-close');
            closeBtn.addEventListener('click', function() {
                removeToast(toast);
            });
            
            // Remover toast após 3 segundos
            setTimeout(() => {
                removeToast(toast);
            }, 3000);
            
            // Animar botão
            button.classList.add('added');
            button.textContent = 'Adicionado ✓';
            
            setTimeout(() => {
                button.classList.remove('added');
                button.textContent = 'Adicionar ao Carrinho';
            }, 2000);
        });
    });
    
    function removeToast(toast) {
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
        
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }
});

