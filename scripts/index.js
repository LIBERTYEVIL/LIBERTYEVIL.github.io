function updateViewportDimensions() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            document.getElementById('viewport-width').textContent = `Width: ${width}px`;
            document.getElementById('viewport-height').textContent = `Height: ${height}px`;
        }

        window.addEventListener('resize', updateViewportDimensions);
        window.addEventListener('load', updateViewportDimensions);