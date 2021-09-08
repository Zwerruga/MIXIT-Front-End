import React, { memo } from 'react'

export default memo(function ButtonDetails() {

    return (
        <a href="#details" className="circle">
            <div className="logo">
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.66492 18.3333L9.99825 9.99996L1.66492 1.66663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
            <div className="text">
                <svg width="200" height="199" viewBox="0 0 200 199" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M195.738 109.193L196.193 101.833L185.889 101.196L185.841 101.976L195.409 102.568L195.052 108.353L185.484 107.76L185.435 108.555L195.738 109.193Z" fill="white" />
                    <path d="M183.9 116.873C183.298 119.791 185.149 122.569 188.038 123.166C190.926 123.764 193.725 121.949 194.326 119.031C194.928 116.114 193.077 113.336 190.189 112.738C187.3 112.141 184.502 113.956 183.9 116.873ZM184.636 117.026C185.152 114.527 187.547 112.99 190.031 113.504C192.515 114.018 194.105 116.38 193.59 118.879C193.074 121.377 190.679 122.915 188.195 122.401C185.712 121.887 184.121 119.525 184.636 117.026Z" fill="white" />
                    <path d="M180.277 132.095L189.288 135.366L191.455 129.375L185.924 127.367C184.039 126.683 183.22 125.868 182.806 125.106L183.087 124.329L180.537 123.403L180.266 124.152L182.123 124.826L179.484 132.121L177.626 131.446L177.355 132.195L179.906 133.121L180.277 132.095ZM185.644 128.097L190.496 129.859L188.86 134.379L180.543 131.36L182.49 125.979C182.985 126.693 183.87 127.453 185.644 128.097Z" fill="white" />
                    <path d="M185.733 143.022L187.311 139.887L178.097 135.232L177.746 135.93L181.26 137.706L180.033 140.142C179.197 141.802 179.811 143.632 181.431 144.45C183.063 145.275 184.897 144.681 185.733 143.022ZM180.691 140.475L181.918 138.038L186.301 140.252L185.075 142.689C184.438 143.954 183.059 144.397 181.782 143.752C180.518 143.114 180.055 141.739 180.691 140.475Z" fill="white" />
                    <path d="M170.975 147.413C169.305 149.879 169.954 153.155 172.393 154.813C174.833 156.47 178.112 155.863 179.782 153.396C181.452 150.93 180.803 147.654 178.363 145.996C175.924 144.339 172.645 144.946 170.975 147.413ZM171.597 147.835C173.027 145.723 175.827 145.218 177.925 146.644C180.023 148.069 180.59 150.861 179.16 152.974C177.729 155.086 174.93 155.591 172.832 154.165C170.734 152.74 170.166 149.948 171.597 147.835Z" fill="white" />
                    <path d="M168.308 160.912L170.267 158.707L172.876 161.033L169.447 164.891L169.998 165.382L173.945 160.939L166.239 154.07L163.761 156.859C162.645 158.116 162.757 160.054 164.012 161.173C165.256 162.281 167.191 162.169 168.308 160.912ZM164.312 157.35L166.271 155.145L169.716 158.217L167.757 160.421C166.934 161.347 165.488 161.421 164.541 160.577C163.584 159.724 163.489 158.276 164.312 157.35Z" fill="white" />
                    <path d="M161.561 173.296L158.488 169.812L162.983 165.835L166.056 169.319L166.641 168.801L159.813 161.059L159.227 161.577L162.495 165.282L158 169.259L154.732 165.554L154.147 166.072L160.976 173.814L161.561 173.296Z" fill="white" />
                    <path d="M151.683 168.83L154.056 172.173L150.211 174.91L150.638 175.511L154.482 172.774L156.804 176.046L152.659 178.996L153.086 179.598L157.867 176.194L151.893 167.775L147.052 171.222L147.478 171.823L151.683 168.83Z" fill="white" />
                    <path d="M145.467 173.038L147.537 176.576L143.466 178.965L143.839 179.601L147.909 177.213L149.934 180.676L145.546 183.25L145.918 183.887L150.98 180.917L145.769 172.006L140.643 175.013L141.015 175.65L145.467 173.038Z" fill="white" />
                    <path d="M124.221 192.4L131.283 190.281L128.324 180.391L127.576 180.616L130.323 189.799L124.772 191.465L122.025 182.282L121.262 182.511L124.221 192.4Z" fill="white" />
                    <path d="M113.023 183.883C110.076 184.318 108.102 187.01 108.532 189.928C108.961 192.846 111.626 194.852 114.573 194.417C117.52 193.982 119.494 191.291 119.065 188.373C118.635 185.455 115.97 183.448 113.023 183.883ZM113.133 184.627C115.657 184.255 117.922 185.977 118.292 188.487C118.661 190.996 116.988 193.3 114.464 193.673C111.94 194.046 109.674 192.323 109.305 189.814C108.936 187.304 110.609 185 113.133 184.627Z" fill="white" />
                    <path d="M97.5897 185.718L97.6636 195.304L104.034 195.254L103.989 189.371C103.973 187.365 104.452 186.314 105.022 185.661L105.848 185.654L105.827 182.941L105.031 182.947L105.046 184.923L97.2891 184.983L97.2738 183.007L96.4775 183.013L96.4984 185.727L97.5897 185.718ZM103.207 189.362L103.247 194.523L98.4395 194.56L98.3713 185.712L104.093 185.668C103.597 186.38 103.193 187.474 103.207 189.362Z" fill="white" />
                    <path d="M88.8481 194.572L92.3344 194.977L93.5235 184.723L92.7471 184.633L92.2936 188.544L89.5836 188.229C87.7379 188.014 86.2323 189.219 86.0234 191.021C85.8127 192.838 87.0024 194.357 88.8481 194.572ZM89.4987 188.961L92.2086 189.276L91.643 194.154L88.933 193.839C87.5268 193.676 86.635 192.533 86.7997 191.112C86.9628 189.705 88.0924 188.797 89.4987 188.961Z" fill="white" />
                    <path d="M79.6061 182.199C76.7169 181.474 73.8662 183.206 73.15 186.067C72.4339 188.928 74.1315 191.803 77.0208 192.528C79.91 193.254 82.7607 191.522 83.4768 188.66C84.193 185.799 82.4953 182.925 79.6061 182.199ZM79.4235 182.929C81.8979 183.55 83.3347 186.009 82.7188 188.47C82.1029 190.931 79.6778 192.42 77.2034 191.799C74.729 191.177 73.2922 188.718 73.9081 186.257C74.524 183.797 76.9491 182.308 79.4235 182.929Z" fill="white" />
                    <path d="M66.1025 184.33L68.8434 185.42L67.5563 188.669L62.7597 186.763L62.4881 187.448L68.0111 189.643L71.8127 180.046L68.3455 178.668C66.7831 178.047 65.0035 178.816 64.3844 180.379C63.7707 181.928 64.5402 183.709 66.1025 184.33ZM68.0739 179.353L70.8148 180.443L69.115 184.734L66.374 183.645C65.2228 183.187 64.6574 181.852 65.1245 180.673C65.597 179.48 66.9227 178.896 68.0739 179.353Z" fill="white" />
                    <path d="M52.2281 182.238L54.439 178.152L59.7138 181.016L57.503 185.101L58.1899 185.474L63.1029 176.396L62.416 176.023L60.0648 180.367L54.79 177.504L57.1412 173.159L56.4543 172.786L51.5413 181.865L52.2281 182.238Z" fill="white" />
                    <path d="M53.0034 171.382L50.6676 174.751L46.7935 172.057L46.3734 172.663L50.2475 175.357L47.9621 178.654L43.7853 175.749L43.3652 176.355L48.1837 179.706L54.0652 171.223L49.1862 167.829L48.7661 168.435L53.0034 171.382Z" fill="white" />
                    <path d="M46.9945 166.996L44.3847 170.158L40.7501 167.148L40.2807 167.716L43.9153 170.726L41.3618 173.82L37.4433 170.575L36.9739 171.143L41.4944 174.887L48.0659 166.926L43.4886 163.135L43.0192 163.704L46.9945 166.996Z" fill="white" />
                    <path d="M19.2521 150.112L23.3865 156.217L31.9254 150.416L31.4871 149.769L23.5582 155.155L20.3086 150.357L28.2375 144.97L27.791 144.311L19.2521 150.112Z" fill="white" />
                    <path d="M24.0102 136.927C22.7002 134.252 19.538 133.193 16.8907 134.493C14.2435 135.794 13.1436 138.946 14.4536 141.622C15.7636 144.297 18.9258 145.356 21.5731 144.056C24.2203 142.755 25.3202 139.603 24.0102 136.927ZM23.3351 137.259C24.4571 139.55 23.506 142.235 21.2294 143.354C18.9527 144.472 16.2506 143.582 15.1287 141.29C14.0067 138.999 14.9578 136.314 17.2344 135.195C19.5111 134.077 22.2132 134.967 23.3351 137.259Z" fill="white" />
                    <path d="M17.6011 122.803L8.48496 125.766L10.4487 131.827L16.0445 130.008C17.9519 129.388 19.0977 129.527 19.892 129.874L20.1466 130.659L22.7271 129.821L22.4817 129.063L20.6024 129.674L18.2114 122.295L20.0907 121.684L19.8452 120.926L17.2647 121.765L17.6011 122.803ZM15.8176 129.26L10.909 130.856L9.42711 126.282L17.842 123.547L19.6057 128.99C18.7779 128.732 17.6128 128.676 15.8176 129.26Z" fill="white" />
                    <path d="M6.58467 117.427L7.25438 120.872L17.3865 118.896L17.2374 118.129L13.3727 118.883L12.8521 116.204C12.4976 114.38 10.8926 113.311 9.11219 113.658C7.31736 114.008 6.23011 115.603 6.58467 117.427ZM12.1284 116.346L12.649 119.024L7.82897 119.964L7.30839 117.286C7.03825 115.896 7.8573 114.699 9.26133 114.426C10.6509 114.155 11.8583 114.956 12.1284 116.346Z" fill="white" />
                    <path d="M15.5584 104.842C15.3749 101.868 12.8607 99.6747 9.91695 99.857C6.97315 100.039 4.74782 102.526 4.9313 105.5C5.11478 108.473 7.62895 110.666 10.5727 110.484C13.5165 110.302 15.7419 107.815 15.5584 104.842ZM14.8077 104.888C14.9649 107.435 13.0563 109.547 10.5246 109.704C7.99294 109.861 5.8391 107.999 5.68196 105.453C5.52483 102.907 7.43342 100.794 9.96509 100.637C12.4968 100.48 14.6506 102.342 14.8077 104.888Z" fill="white" />
                    <path d="M9.4127 92.3652L9.20839 95.3076L5.72176 95.0647L6.07931 89.9156L5.34373 89.8643L4.93205 95.7931L15.2301 96.5106L15.4886 92.7885C15.605 91.1114 14.3318 89.6479 12.6547 89.531C10.9923 89.4152 9.52916 90.6881 9.4127 92.3652ZM14.753 92.7373L14.5487 95.6796L9.94396 95.3588L10.1483 92.4165C10.2341 91.1807 11.3344 90.2373 12.5996 90.3254C13.8795 90.4146 14.8388 91.5015 14.753 92.7373Z" fill="white" />
                    <path d="M7.1617 78.5379L11.7245 79.4096L10.6018 85.3057L6.03893 84.434L5.89272 85.2018L16.0323 87.139L16.1785 86.3712L11.326 85.4441L12.4488 79.548L17.3013 80.475L17.4475 79.7072L7.30791 77.7701L7.1617 78.5379Z" fill="white" />
                    <path d="M17.7275 75.9237L13.8099 74.7154L15.1966 70.2046L14.492 69.9873L13.1053 74.498L9.27224 73.3158L10.7673 68.4527L10.0627 68.2353L8.33796 73.8456L18.2024 76.8881L19.9488 71.2074L19.2442 70.99L17.7275 75.9237Z" fill="white" />
                    <path d="M20.0299 68.9504L16.2315 67.4078L18.0021 63.0335L17.319 62.7561L15.5483 67.1304L11.8319 65.6211L13.7408 60.905L13.0577 60.6276L10.8554 66.0681L20.4198 69.9523L22.6497 64.4434L21.9666 64.166L20.0299 68.9504Z" fill="white" />
                    <path d="M27.7095 37.3131L23.1409 43.1008L31.2335 49.5097L31.7178 48.8962L24.2032 42.9451L27.7942 38.3959L35.3087 44.3471L35.8021 43.722L27.7095 37.3131Z" fill="white" />
                    <path d="M41.8631 37.6849C44.0208 35.6309 44.0848 32.2919 42.0547 30.1523C40.0246 28.0127 36.6921 27.9071 34.5344 29.961C32.3768 32.0149 32.3127 35.354 34.3428 37.4936C36.3729 39.6331 39.7055 39.7388 41.8631 37.6849ZM41.3454 37.1393C39.4976 38.8983 36.6548 38.7947 34.9089 36.9547C33.163 35.1146 33.2042 32.2656 35.0521 30.5066C36.9 28.7475 39.7427 28.8512 41.4886 30.6912C43.2345 32.5312 43.1933 35.3802 41.3454 37.1393Z" fill="white" />
                    <path d="M53.1121 27.4886L47.5361 19.6916L42.3599 23.4054L45.7826 28.1916C46.9493 29.823 47.1629 30.9583 47.0731 31.8214L46.4021 32.3029L47.9805 34.51L48.6275 34.0458L47.478 32.4384L53.7806 27.9164L54.9302 29.5238L55.5772 29.0596L53.9988 26.8524L53.1121 27.4886ZM46.4263 27.748L43.4238 23.5496L47.33 20.747L52.477 27.9442L47.828 31.2798C47.8236 30.4117 47.5243 29.2834 46.4263 27.748Z" fill="white" />
                    <path d="M55.0571 15.2172L51.9788 16.9032L56.9253 25.9639L57.6108 25.5884L55.7241 22.1324L58.1169 20.8218C59.7466 19.9292 60.2793 18.0737 59.4102 16.4816C58.5339 14.8766 56.6868 14.3245 55.0571 15.2172ZM57.7636 20.1747L55.3707 21.4852L53.0176 17.1749L55.4104 15.8643C56.6521 15.1843 58.0392 15.6015 58.7247 16.8571C59.403 18.0997 59.0052 19.4946 57.7636 20.1747Z" fill="white" />
                    <path d="M69.5845 20.0069C72.361 18.9276 73.6886 15.8641 72.623 13.1139C71.5573 10.3637 68.514 8.9994 65.7375 10.0788C62.961 11.1581 61.6334 14.2216 62.699 16.9718C63.7647 19.722 66.808 21.0863 69.5845 20.0069ZM69.3127 19.3057C66.9348 20.2301 64.344 19.0538 63.4275 16.6886C62.5111 14.3234 63.6314 11.7045 66.0092 10.7801C68.3871 9.85566 70.978 11.0319 71.8945 13.3971C72.8109 15.7623 71.6906 18.3813 69.3127 19.3057Z" fill="white" />
                    <path d="M79.4882 10.3818L76.6222 11.0783L75.7993 7.68151L80.8148 6.46252L80.6412 5.74589L74.8662 7.14947L77.2967 17.1823L80.9222 16.3011C82.5558 15.9041 83.5656 14.2473 83.1698 12.6133C82.7774 10.9938 81.1218 9.98473 79.4882 10.3818ZM80.7486 15.5845L77.8826 16.2811L76.7958 11.795L79.6618 11.0984C80.8655 10.8058 82.0973 11.5688 82.3959 12.8014C82.698 14.0483 81.9523 15.2919 80.7486 15.5845Z" fill="white" />
                    <path d="M91.7774 4.0689L92.3302 8.68124L86.371 9.39778L85.8182 4.78544L85.0422 4.87875L86.2707 15.1284L87.0467 15.0351L86.4588 10.1299L92.4179 9.41336L93.0058 14.3186L93.7818 14.2252L92.5534 3.97559L91.7774 4.0689Z" fill="white" />
                    <path d="M97.4377 13.3287L97.3903 9.22922L102.109 9.17457L102.101 8.43726L97.3817 8.49191L97.3353 4.48095L102.423 4.42204L102.414 3.68473L96.5452 3.7527L96.6647 14.075L102.607 14.0062L102.599 13.2689L97.4377 13.3287Z" fill="white" />
                    <path d="M105.115 13.3912L105.431 9.30366L110.136 9.66736L110.193 8.9322L105.488 8.5685L105.797 4.5692L110.87 4.96132L110.927 4.22615L105.075 3.7738L104.279 14.0661L110.205 14.5241L110.262 13.789L105.115 13.3912Z" fill="white" />
                    <path d="M137.799 11.188L130.907 8.56799L127.249 18.2213L127.98 18.499L131.376 9.53523L136.794 11.5946L133.397 20.5584L134.142 20.8413L137.799 11.188Z" fill="white" />
                    <path d="M141.457 24.6807C144.064 26.1214 147.262 25.1756 148.685 22.5921C150.108 20.0085 149.201 16.7948 146.593 15.3541C143.986 13.9134 140.788 14.8592 139.365 17.4427C137.943 20.0263 138.85 23.24 141.457 24.6807ZM141.82 24.0219C139.587 22.788 138.826 20.0426 140.05 17.8207C141.273 15.5989 143.997 14.7791 146.231 16.0129C148.464 17.2468 149.224 19.9922 148.001 22.2141C146.777 24.4359 144.053 25.2557 141.82 24.0219Z" fill="white" />
                    <path d="M155.092 32.7553L160.865 25.1033L155.786 21.2583L152.242 25.9555C151.034 27.5565 150.015 28.0986 149.166 28.2695L148.507 27.7711L146.873 29.9372L147.508 30.4178L148.698 28.8403L154.883 33.522L153.693 35.0995L154.328 35.5801L155.962 33.414L155.092 32.7553ZM152.856 26.439L155.965 22.3186L159.798 25.2202L154.469 32.2836L149.907 28.8302C150.733 28.5678 151.719 27.9458 152.856 26.439Z" fill="white" />
                    <path d="M166.862 30.5034L164.328 28.0742L157.196 35.5369L157.76 36.0778L160.48 33.2314L162.45 35.1196C163.791 36.4057 165.718 36.3532 166.971 35.0419C168.235 33.7199 168.203 31.7895 166.862 30.5034ZM162.959 34.5866L160.99 32.6983L164.383 29.1482L166.352 31.0365C167.374 32.0163 167.395 33.4668 166.407 34.5009C165.429 35.5244 163.981 35.5664 162.959 34.5866Z" fill="white" />
                    <path d="M166.92 46.0947C168.783 48.4194 172.1 48.7617 174.398 46.9138C176.697 45.0658 177.081 41.7484 175.219 39.4237C173.356 37.099 170.039 36.7567 167.74 38.6046C165.442 40.4526 165.057 43.77 166.92 46.0947ZM167.506 45.6235C165.911 43.6325 166.252 40.8038 168.229 39.2146C170.206 37.6254 173.037 37.9039 174.632 39.8949C176.228 41.8859 175.886 44.7146 173.91 46.3038C171.933 47.893 169.102 47.6145 167.506 45.6235Z" fill="white" />
                    <path d="M178.86 52.3073L177.324 49.7891L180.306 47.9652L182.993 52.372L183.622 51.9872L180.528 46.913L171.722 52.3002L173.664 55.4857C174.54 56.9211 176.423 57.3763 177.858 56.499C179.279 55.6293 179.735 53.7427 178.86 52.3073ZM174.293 55.1009L172.758 52.5827L176.695 50.1739L178.231 52.6921C178.876 53.7497 178.525 55.1572 177.443 55.8191C176.349 56.4886 174.938 56.1585 174.293 55.1009Z" fill="white" />
                    <path d="M188.86 62.6274L184.631 64.5507L182.153 59.0841L186.382 57.1609L186.059 56.449L176.662 60.7229L176.985 61.4347L181.482 59.3894L183.96 64.856L179.463 66.9013L179.786 67.6132L189.182 63.3393L188.86 62.6274Z" fill="white" />
                    <path d="M181.685 70.732L185.579 69.4499L187.051 73.9337L187.751 73.7031L186.28 69.2193L190.09 67.9648L191.676 72.7989L192.376 72.5683L190.546 66.9916L180.741 70.22L182.594 75.8668L183.295 75.6362L181.685 70.732Z" fill="white" />
                    <path d="M183.858 77.8641L187.849 76.9262L188.925 81.521L189.643 81.3523L188.567 76.7576L192.472 75.84L193.632 80.7937L194.35 80.625L193.012 74.9103L182.962 77.2718L184.318 83.0583L185.035 82.8896L183.858 77.8641Z" fill="white" />
                </svg>

            </div>
        </a>
    )
})