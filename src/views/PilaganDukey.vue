<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import * as echarts from 'echarts'

// chart data
const data = reactive({
  name: 'Dukey Pilagan',
  children: [
    {
      name: 'Ignacio Pilagan',
      children: [
        {
          name: 'Name unknown - 1st wife',
          children: [
            {
              name: 'Marcus Pilagan',
              children: [
                {
                  name: 'Nenita Pilagan - Ngayaan',
                  children: [
                    {
                      name: 'Agnes Pilagan Ngayaan - Salbino'
                    },
                    {
                      name: 'Leticia Pilagan Ngayaan - Portem'
                    },
                    {
                      name: 'Juanito Pilagan Ngayaan'
                    },
                    {
                      name: 'Fidel Pilagan Ngayaan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Puring Pilagan - Polides',
                  children: [
                    {
                      name: 'Dominga Pilagan Polides - Pastrana'
                    },
                    {
                      name: 'Jovy Pilagan Polides - Ciriaco'
                    },
                    {
                      name: 'Felimon Pilagan Polides'
                    },
                    {
                      name: 'Jun Pilagan Polides'
                    },
                    {
                      name: 'Anaya Pilagan Polides'
                    },
                    {
                      name: 'Alma Pilagan Polides - Soliman'
                    },
                    {
                      name: 'Ermie Pilagan Polides - Aciong'
                    },
                    {
                      name: 'Antonio Pilagan Polides'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Enrique Pilagan',
                  children: [
                    {
                      name: 'Joel Pilagan'
                    },
                    {
                      name: 'Janice Pilagan'
                    },
                    {
                      name: 'Crisanta Pilagan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Victor Pilagan'
                }
              ],
              collapsed: false
            },
            {
              name: 'Terio Pilagan',
              children: [
                {
                  name: 'Aida Pilagan - Dauzon',
                  children: [
                    {
                      name: 'Doracion Pilagan Dauzon - Mata',
                      children: [
                        {
                          name: 'Mark Anthony Pilagan Dauzon Mata'
                        },
                        {
                          name: 'Erwin Pilagan Dauzon Mata'
                        },
                        {
                          name: 'Dandan Pilagan Dauzon Mata'
                        },
                        {
                          name: 'Welma Pilagan Dauzon Mata'
                        },
                        {
                          name: 'Chato Pilagan Dauzon Mata'
                        },
                        {
                          name: 'Jay-jay Pilagan Dauzon Mata'
                        }
                      ],
                      collapsed: false
                    },
                    {
                      name: 'Zenaida Pilagan Dauzon - Bartolome',
                      children: [
                        {
                          name: 'Frema Pilagan Dauzon Bartolome'
                        },
                        {
                          name: 'Lenlen Pilagan Dauzon Bartolome'
                        }
                      ],
                      collapsed: false
                    },
                    {
                      name: 'Dominador Pilagan Dauzon Jr.'
                    },
                    {
                      name: 'Marites Pilagan Dauzon - Roque'
                    },
                    {
                      name: 'Irene Pilagan Dauzon - Luis'
                    },
                    {
                      name: 'Johnny Pilagan Dauzon'
                    },
                    {
                      name: 'Lisa Pilagan Dauzon'
                    },
                    {
                      name: 'Joe Pilagan Dauzon',
                      children: []
                    },
                    {
                      name: 'Fibe Pilagan Dauzon - Wanagen'
                    },
                    {
                      name: 'Daisy Pilagan Dauzon Tamayo'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Arthur Baclayen Pilagan',
                  children: [
                    {
                      name: 'Arlene Pilagan'
                    },
                    {
                      name: 'Melanie Pilagan - Ballester'
                    },
                    {
                      name: 'Mary Anne Pilagan - Bung-e'
                    },
                    {
                      name: 'Maricel Pilagan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Domingo Pilagan Sr.',
                  children: [
                    {
                      name: 'Delia Pilagan'
                    },
                    {
                      name: 'Carol Pilagan'
                    },
                    {
                      name: 'Mario Pilagan'
                    },
                    {
                      name: 'Madonna Pilagan'
                    },
                    {
                      name: 'Maricel Pilagan'
                    },
                    {
                      name: 'Catherine Pilagan - Bal-iyang'
                    },
                    {
                      name: 'Domingo Pilagan Jr.'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Donato Pilagan Sr.',
                  children: [
                    {
                      name: 'Michele Pilagan - Day-a'
                    },
                    {
                      name: 'Jayson Pilagan'
                    },
                    {
                      name: 'Raquel Pilagan - Malaggan'
                    },
                    {
                      name: 'Fema Pilagan - Padua'
                    },
                    {
                      name: 'Monette Pilagan - Ledummeng'
                    },
                    {
                      name: 'Jenny Pilagan - Tingey'
                    },
                    {
                      name: 'Hover Pilagan'
                    },
                    {
                      name: 'Jinky Pilagan'
                    },
                    {
                      name: 'Donato Pilagan Jr.'
                    },
                    {
                      name: 'Melvin Pilagan'
                    },
                    {
                      name: 'Karen Pilagan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Crecensia Pilagan - Ubuan',
                  children: [
                    {
                      name: 'Maribeth Pilagan Ubuan - Resureccion'
                    },
                    {
                      name: 'Aris Pilagan Ubuan'
                    },
                    {
                      name: 'Janeth Pilagan Ubuan - Daus'
                    },
                    {
                      name: 'Aiza Pilagan Ubuan - Compra'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Lelia Pilagan - Smith',
                  children: [
                    {
                      name: 'Cristopher Pilagan Smith'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Julio Pilagan',
                  children: [
                    {
                      name: 'John Michael Pilagan'
                    },
                    {
                      name: 'Jay-ar Pilagan'
                    },
                    {
                      name: 'Julius Pilagan'
                    },
                    {
                      name: 'Norman Pilagan'
                    },
                    {
                      name: 'John Patrick Pilagan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Marieta Pilagan - Liwan',
                  children: [
                    {
                      name: 'Gilbert Pilagan Liwan'
                    },
                    {
                      name: 'Janice Pilagan Liwan'
                    },
                    {
                      name: 'Elias Pilagan Liwan Jr.'
                    },
                    {
                      name: 'Beverly Pilagan Liwan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Alfredo Pilagan',
                  children: [
                    {
                      name: 'Alex Pilagan - Acosta'
                    },
                    {
                      name: 'Arnel Pilagan'
                    },
                    {
                      name: 'Arman Pilagan'
                    },
                    {
                      name: 'Jerome Pilagan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Margareta Pilagan - Comiles',
                  children: [
                    {
                      name: 'Leneth Pilagan Comiles'
                    },
                    {
                      name: 'Keiry Pilagan Comiles - Pacio'
                    },
                    {
                      name: 'Ryan Pilagan Comiles'
                    },
                    {
                      name: 'Jumar Pilagan Comiles'
                    },
                    {
                      name: 'Benjie Pilagan Comiles'
                    },
                    {
                      name: 'Melo Jane  Pilagan Comiles'
                    }
                  ],
                  collapsed: false
                }
              ],
              collapsed: false
            },
            {
              name: 'Magdalena Pilagan - Pislaan',
              children: [
                {
                  name: 'Josephina Pilagan Pislaan - Apalet',
                  children: [
                    {
                      name: 'Henry Pilagan Pislaan Apalet'
                    },
                    {
                      name: 'Victor Pilagan Pislaan Apalet'
                    },
                    {
                      name: 'Cepherino Pilagan Pislaan Apalet Jr.'
                    },
                    {
                      name: 'Ariel Pilagan Pislaan Apalet'
                    },
                    {
                      name: 'Julie Pilagan Pislaan Apalet'
                    },
                    {
                      name: 'Lilibeth Pilagan Pislaan Apalet'
                    },
                    {
                      name: 'Michele Pilagan Pislaan Apalet'
                    },
                    {
                      name: 'Roy Pilagan Pislaan Apalet'
                    },
                    {
                      name: 'Rey Pilagan Pislaan Apalet'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Tessy Pilagan Pislaan'
                },
                {
                  name: 'Jaime Pilagan Pislaan'
                },
                {
                  name: 'Lito Pilagan Pislaan'
                }
              ],
              collapsed: false
            }
          ],
          collapsed: false
        },
        {
          name: 'Sofia (Basil) Awigan Pilagan - 2nd wife',
          children: [
            {
              name: 'Simplicio Awigan Pilagan',
              children: [
                {
                  name: 'Diego Postin Pilagan'
                },
                {
                  name: 'Peter Postin Pilagan',
                  children: [
                    {
                      name: 'Lister Sunio Pilagan'
                    },
                    {
                      name: 'Steven Sunio Pilagan'
                    },
                    {
                      name: 'Liezel Sunio Pilagan - Barba',
                      children: [
                        {
                          name: 'Zamira Pilagan Barba'
                        },
                        {
                          name: 'VJ Pilagan Barba'
                        }
                      ],
                      collapsed: false
                    },
                    {
                      name: 'Mcreigert Sunio Pilagan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Virgilio Postin Pilagan'
                },
                {
                  name: 'Marilou Postin Pilagan - Bigsot',
                  children: [
                    {
                      name: 'Jerome Pilagan Bigsot'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Larry Postin Pilagan',
                  children: [
                    {
                      name: 'Frankie Caguay Pilagan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Amy Postin Pilagan - Jackson'
                }
              ],
              collapsed: false
            },
            {
              name: 'Espiritu Awigan Pilagan',
              children: [
                {
                  name: 'Eulogio Budao Pilagan Sr.',
                  children: [
                    {
                      name: 'Emily Ruth Batallang Pilagan - Ebeng',
                      children: [
                        {
                          name: 'Krishna Pilagan Ebeng'
                        },
                        {
                          name: 'Tiara Pilagan Ebeng'
                        },
                        {
                          name: 'Kyle Pilagan Ebeng'
                        }
                      ],
                      collapsed: false
                    },
                    {
                      name: 'Eden Batallang Pilagan - Feraldo',
                      children: [
                        {
                          name: 'Tyron Pilagan Feraldo'
                        },
                        {
                          name: 'Trixie Pilagan Feraldo'
                        }
                      ],
                      collapsed: false
                    },
                    {
                      name: 'Glenn Mark Batallang Pilagan'
                    },
                    {
                      name: 'Patrick Leo Batallang Pilagan'
                    },
                    {
                      name: 'Eulogio Batallang Pilagan Jr.'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Florencio Budao Pilagan',
                  children: [
                    {
                      name: 'Mark Daniel Tagoda Pilagan'
                    },
                    {
                      name: 'Krissah Tagoda Pilagan'
                    },
                    {
                      name: 'Jay-Anne Tagoda Pilagan'
                    },
                    {
                      name: 'Ezzer Tagoda Pilagan'
                    },
                    {
                      name: 'Alexon Tagoda Pilagan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Virgilio Budao Pilagan',
                  children: [
                    {
                      name: 'Vialyn Barrozo Pilagan'
                    }
                  ],
                  collapsed: false
                }
              ],
              collapsed: false
            },
            {
              name: 'Pacita Awigan Pilagan',
              children: [
                {
                  name: 'Jean Pilagan'
                },
                {
                  name: 'Josie Pilagan'
                },
                {
                  name: 'Meldy Pilagan'
                },
                {
                  name: 'Sabbeth Pilagan'
                }
              ],
              collapsed: false
            },
            {
              name: 'Avelina Awigan Pilagan - Lumpangi - Arcardo',
              children: [
                {
                  name: 'Emily Pilagan Lumpangi'
                },
                {
                  name: 'Dionie Pilagan Lumpangi',
                  children: [
                    {
                      name: 'Spencer Lumpangi'
                    },
                    {
                      name: 'Rio Lumpangi'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Leo Pilagan Lumpangi',
                  children: [
                    {
                      name: 'Hannah Lumpangi'
                    },
                    {
                      name: 'Harvelio Lumpangi'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Giovanni Pilagan Arcardo'
                },
                {
                  name: 'Jay-anne Pilagan Arcardo',
                  children: []
                }
              ],
              collapsed: false
            }
          ],
          collapsed: false
        }
      ],
      collapsed: false
    },
    {
      name: 'Alvaro Dukey',
      children: [
        {
          name: 'Alfredo Dukey',
          children: [
            {
              name: 'Ofelia Dukey - Vidal'
            },
            {
              name: 'Medina Dukey - Guiao'
            }
          ],
          collapsed: false
        },
        {
          name: 'Arsenio Dukey',
          children: [
            {
              name: 'Jaime Dukey',
              children: [
                {
                  name: 'Elmer Dukey'
                },
                {
                  name: 'Elvira Dukey - Padsing'
                },
                {
                  name: 'Perla Dukey - Podes'
                }
              ],
              collapsed: false
            },
            {
              name: 'Minda Dukey - Benamir',
              children: [
                {
                  name: 'Michael Dukey Benamir'
                },
                {
                  name: 'Merylyn Dukey Benamir - Castro'
                },
                {
                  name: 'Mirvin Dukey Benamir'
                },
                {
                  name: 'Milyn Dukey Benamir'
                },
                {
                  name: 'Mayeth Dukey Benamir - Belen'
                },
                {
                  name: 'Menard Dukey Benamir'
                },
                {
                  name: '(Balassit) Dukey Benamir'
                }
              ],
              collapsed: false
            },
            {
              name: 'Veirnessa Dukey - Fabian',
              children: [
                {
                  name: 'Marisel Dukey Fabian'
                },
                {
                  name: 'Marcelino Dukey Fabian Jr.'
                },
                {
                  name: 'Richard Dukey Fabian'
                }
              ],
              collapsed: false
            },
            {
              name: 'Lucia Dukey - Rey',
              children: [
                {
                  name: 'Ranie Dukey - Rey'
                },
                {
                  name: 'Rachele Dukey - Rey'
                },
                {
                  name: '(Kalbo) Dukey - Rey'
                },
                {
                  name: 'Reina Dukey - Rey'
                }
              ],
              collapsed: false
            },
            {
              name: 'Mileth Dukey - Gilo',
              children: [
                {
                  name: 'Rovincent Dukey Gilo'
                },
                {
                  name: 'Chrysler Dukey Gilo'
                },
                {
                  name: 'Salma Dukey Gilo'
                },
                {
                  name: 'Minea Dukey Gilo'
                }
              ],
              collapsed: false
            },
            {
              name: 'Rico Dukey'
            },
            {
              name: 'Jun Dukey',
              children: [
                {
                  name: 'Marivic Dukey'
                },
                {
                  name: 'Marian Dukey'
                },
                {
                  name: 'Martin Dukey'
                },
                {
                  name: 'Yannah Dukey'
                },
                {
                  name: '-'
                },
                {
                  name: '-'
                }
              ],
              collapsed: false
            },
            {
              name: 'Dante Dukey',
              children: [
                {
                  name: 'Lyra Dukey'
                }
              ],
              collapsed: false
            },
            {
              name: 'Jumar Dukey',
              children: [
                {
                  name: 'Ajay Dukey'
                },
                {
                  name: 'Ashly Dukey'
                }
              ],
              collapsed: false
            }
          ],
          collapsed: false
        },
        {
          name: 'Ragsak Dukey',
          children: [
            {
              name: 'Rag-o Dukey'
            },
            {
              name: 'Jimmy Dukey'
            },
            {
              name: 'Cathy Dukey - Lucenario'
            },
            {
              name: 'Renato Dukey'
            },
            {
              name: 'Vicente Dukey'
            },
            {
              name: 'Ruby Dukey - Lingbaoan'
            },
            {
              name: 'Berneth Dukey - Ubuan'
            },
            {
              name: 'Severo Dukey'
            },
            {
              name: 'Mary Ann Dukey'
            },
            {
              name: 'Mike Dukey'
            },
            {
              name: 'Ragmar Dukey'
            },
            {
              name: 'Reymar Dukey'
            }
          ],
          collapsed: false
        },
        {
          name: 'Narcisa Dukey - Bang-a'
        },
        {
          name: 'Salvador Cortez',
          children: [
            {
              name: '-'
            },
            {
              name: '-'
            },
            {
              name: '-'
            },
            {
              name: '-'
            },
            {
              name: '-'
            }
          ],
          collapsed: false
        },
        {
          name: 'Jovita Dukey - Camide',
          children: [
            {
              name: 'Norma Dukey Camide - Ramirez'
            },
            {
              name: 'Eldemio Dukey Camide'
            },
            {
              name: 'Elma Dukey Camide - Daodaoen'
            },
            {
              name: 'Erik Dukey Camide'
            }
          ],
          collapsed: false
        }
      ],
      collapsed: false
    }
  ],
  collapsed: false
})

// Specify the configuration items and data for the chart
const chartOption = computed(() => {
  return {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    toolbox: {
      itemSize: 20,
      feature: {
        saveAsImage: {
          type: 'png',
          name: 'Pilagan-Dukey_family_tree',
          backgroundColor: '#ffffff',
          show: true
        },
        dataZoom: {
          show: true
        },
        restore: {
          show: true
        }
      }
    },
    series: [
      {
        type: 'tree',
        data: [data],
        top: '1%',
        left: '2%',
        bottom: '1%',
        right: '5%',
        symbol: 'circle',
        symbolSize: 18,
        lineStyle: {
          color: '#aaaaaa'
        },
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 18
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },
        emphasis: {
          focus: 'descendant'
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  }
})

onMounted(() => {
  const treeChart = echarts.init(document.getElementById('main'))

  // Display the chart using the configuration items and data just specified.
  treeChart.setOption(chartOption.value)

  window.addEventListener('resize', function () {
    treeChart.resize()
  })
})
</script>

<template>
  <main>
    <div id="main" style="width: 300%; height: 550vh; background: #ffffff"></div>
  </main>
</template>
