$.ajax({
    type: "GET",
    url: "http://api.football-data.org/v2/competitions/",
    headers: {
        'X-Auth-Token': '05a2bbe879a64494b79eeebc0b2f618c'
    },

    success: function(response) {
        console.log(response)
        let area = ''
        response.competitions.forEach((liga, i) => {
            area += `<div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                ${liga.area.name}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is the
                  first item's accordion body.
                </div>
              </div>`
        console.log(area)


    });
    $('#data-content').html(area);


}
});

