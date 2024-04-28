<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import * as echarts from 'echarts'

const imgUrl = new URL('../assets/Pilagan-Dukey_Genealogy.png', import.meta.url).href

// chart data
const data = reactive({
  name: 'Dukey Pilagan',
  details: {
    wife: ''
  },
  children: [
    {
      name: 'Ignacio Pilagan',
      children: [
        {
          name: 'Sabadia Pilagan - 1st wife',
          children: [
            {
              name: 'Marcus Pilagan',
              details: {
                wife: ''
              },
              children: [
                {
                  name: 'Nenita Pilagan - Ngayaan',
                  details: {
                    husband: 'Sidoro Ngayaan'
                  },
                  children: [
                    {
                      name: 'Agnes Pilagan Ngayaan - Salbino',
                      details: {
                        husband: 'Romualdo Salbino'
                      }
                    },
                    {
                      name: 'Leticia Pilagan Ngayaan - Portem',
                      details: {
                        husband: 'Nolito Portem'
                      }
                    },
                    {
                      name: 'Juanito Pilagan Ngayaan',
                      details: {
                        wife: 'Norma Dang-alan'
                      }
                    },
                    {
                      name: 'Fidel Pilagan Ngayaan',
                      details: {
                        wife: 'Gina Maog'
                      },
                      children: [
                        {
                          name: 'June Rondel Pilagan Maog Ngayaan',
                          details: {
                            wife: 'Dara Caguay Paetan - Ngayaan'
                          },
                          children: [
                            {
                              name: 'Louise Amethyst Pilagan Maog Paetan Ngayaan'
                            },
                            {
                              name: 'Jude Mar Pilagan Maog Paetan Ngayaan'
                            }
                          ],
                          collapsed: false
                        },
                        {
                          name: 'June Leonel Pilagan Maog Ngayaan'
                        },
                        {
                          name: 'Fidel Pilagan Maog Ngayaan Jr.'
                        },
                        {
                          name: 'Geofed Jhon Pilagan Maog Ngayaan'
                        },
                        {
                          name: 'Jerico Pilagan Maog Ngayaan'
                        }
                      ],
                      collapsed: false
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Puring Pilagan - Polides',
                  details: {
                    husband: ''
                  },
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
                  details: {
                    wife: ''
                  },
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
              name: 'Eleuterio Pilagan aka "Terio"',
              details: {
                wife: ''
              },
              children: [
                {
                  name: 'Aida Pilagan - Dauzon',
                  details: {
                    husband: ''
                  },
                  children: [
                    {
                      name: 'Adoracion Pilagan Dauzon - Mata',
                      details: {
                        husband: ''
                      },
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
                      name: 'Zenaida Pilagan Dauzon - Canzino',
                      details: {
                        husband: ''
                      },
                      children: [
                        {
                          name: 'Frema Pilagan Dauzon Canzino'
                        },
                        {
                          name: 'Lenlen Pilagan Dauzon Canzino'
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
                      details: {
                        wife: ''
                      },
                      children: []
                    },
                    {
                      name: 'Fibe Pilagan Dauzon - Wanagen',
                      details: {
                        husband: ''
                      }
                    },
                    {
                      name: 'Daisy Pilagan Dauzon Tamayo',
                      details: {
                        husband: ''
                      }
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Arthur Baclayen Pilagan',
                  details: {
                    wife: 'Valentina (Tina) Galangey Pattang - Pilagan'
                  },
                  children: [
                    {
                      name: 'Arlene Pilagan - Oquingan'
                    },
                    {
                      name: 'Melanie Pilagan - Ballester',
                      details: {
                        husband: ''
                      }
                    },
                    {
                      name: 'Mary Anne Pilagan - Paslao',
                      details: {
                        husband: ''
                      }
                    },
                    {
                      name: 'Arteshell Pilagan Dadnga-a'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Domingo Pilagan Sr.',
                  details: {
                    wife: ''
                  },
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
                      name: 'Catherine Pilagan - Bal-iyang',
                      details: {
                        husband: ''
                      }
                    },
                    {
                      name: 'Domingo Pilagan Jr.'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Donato Pilagan Sr.',
                  details: {
                    wife: ''
                  },
                  children: [
                    {
                      name: 'Michele Pilagan - Day-a',
                      details: {
                        husband: ''
                      }
                    },
                    {
                      name: 'Jayson Pilagan'
                    },
                    {
                      name: 'Raquel Pilagan - Malaggan',
                      details: {
                        husband: ''
                      }
                    },
                    {
                      name: 'Fema Pilagan - Padua'
                    },
                    {
                      name: 'Monette Pilagan - Ledummeng',
                      details: {
                        husband: ''
                      }
                    },
                    {
                      name: 'Jenny Pilagan - Tingey',
                      details: {
                        husband: ''
                      }
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
                  details: {
                    husband: ''
                  },
                  children: [
                    {
                      name: 'Maribeth Pilagan Ubuan - Resureccion',
                      details: {
                        husband: ''
                      }
                    },
                    {
                      name: 'Aris Pilagan Ubuan'
                    },
                    {
                      name: 'Janeth Pilagan Ubuan - Daus',
                      details: {
                        husband: ''
                      }
                    },
                    {
                      name: 'Aiza Pilagan Ubuan - Compra',
                      details: {
                        husband: ''
                      }
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Lelia Pilagan - Smith',
                  details: {
                    husband: ''
                  },
                  children: [
                    {
                      name: 'Cristopher Pilagan Smith'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Julio Pilagan',
                  details: {
                    wife: ''
                  },
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
                  details: {
                    husband: ''
                  },
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
                  details: {
                    wife: ''
                  },
                  children: [
                    {
                      name: 'Alex Pilagan - Acosta',
                      details: {
                        husband: ''
                      }
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
                  details: {
                    husband: ''
                  },
                  children: [
                    {
                      name: 'Leneth Pilagan Comiles'
                    },
                    {
                      name: 'Keiry Pilagan Comiles - Pacio',
                      details: {
                        husband: ''
                      }
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
                      name: 'Melo Jane Pilagan Comiles'
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
          name: 'Sofia Awigan Pilagan aka "Basil" - 2nd wife',
          children: [
            {
              name: 'Simplicio Awigan Pilagan aka "Ensiong"',
              details: {
                wife: 'Rosita Quila Postin - Pilagan'
              },
              children: [
                {
                  name: 'Diego Postin Pilagan'
                },
                {
                  name: 'Peter Postin Pilagan',
                  details: {
                    wife: 'Eliza Arellano Sunio - Pilagan'
                  },
                  children: [
                    {
                      name: 'Lister Sunio Pilagan'
                    },
                    {
                      name: 'Steven Sunio Pilagan'
                    },
                    {
                      name: 'Liezel Sunio Pilagan - Barba',
                      details: {
                        husband: 'John Von Barba'
                      },
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
                  details: {
                    husband: 'Romeo Bigsot'
                  },
                  children: [
                    {
                      name: 'Jerome Pilagan Bigsot'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Larry Postin Pilagan',
                  details: {
                    wife: 'Corazon Caguay - Pilagan'
                  },
                  children: [
                    {
                      name: 'Frankie Caguay Pilagan'
                    }
                  ],
                  collapsed: false
                },
                {
                  name: 'Amy Postin Pilagan - Jackson',
                  details: {
                    husband: 'Frank Jackson'
                  }
                }
              ],
              collapsed: false
            },
            {
              name: 'Espiritu Awigan Pilagan aka "Espir"',
              details: {
                wife: ''
              },
              children: [
                {
                  name: 'Eulogio Budao Pilagan Sr.',
                  details: {
                    wife: ''
                  },
                  children: [
                    {
                      name: 'Emily Ruth Batallang Pilagan - Ebeng',
                      details: {
                        husband: ''
                      },
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
                      details: {
                        husband: ''
                      },
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
                  details: {
                    wife: ''
                  },
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
                  details: {
                    wife: ''
                  },
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
              name: 'Pacita Awigan Pilagan aka "Pasing"',
              details: {
                husband: ''
              },
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
              name: 'Avelina Awigan Pilagan - Lumpangi - Arcardo aka "Belen"',
              details: {
                husband: ''
              },
              children: [
                {
                  name: 'Emily Pilagan Lumpangi'
                },
                {
                  name: 'Dionie Pilagan Lumpangi',
                  details: {
                    wife: ''
                  },
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
                  details: {
                    wife: ''
                  },
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
                  name: 'Giovanni Pilagan Arcardo',
                  details: {
                    wife: ''
                  }
                },
                {
                  name: 'Jay-anne Pilagan Arcardo',
                  details: {
                    husband: ''
                  },
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
      details: {
        wife: ''
      },
      children: [
        {
          name: 'Alfredo Dukey',
          details: {
            wife: ''
          },
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
          name: 'Arsenio Dukey aka "Senio"',
          details: {
            wife: ''
          },
          children: [
            {
              name: 'Jaime Dukey',
              details: {
                wife: ''
              },
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
              details: {
                husband: ''
              },
              children: [
                {
                  name: 'Michael Dukey Benamir'
                },
                {
                  name: 'Merylyn Dukey Benamir - Castro'
                },
                {
                  name: 'Mirvin Dukey Benamir',
                  details: {
                    wife: ''
                  }
                },
                {
                  name: 'Milyn Dukey Benamir'
                },
                {
                  name: 'Mayeth Dukey Benamir - Belen',
                  details: {
                    husband: ''
                  }
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
              details: {
                husband: ''
              },
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
              details: {
                husband: ''
              },
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
              details: {
                husband: ''
              },
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
              details: {
                wife: ''
              },
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
              details: {
                wife: ''
              },
              children: [
                {
                  name: 'Lyra Dukey'
                }
              ],
              collapsed: false
            },
            {
              name: 'Jumar Dukey',
              details: {
                wife: ''
              },
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
          details: {
            wife: 'Maria Dukey'
          },
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
          name: 'Narcisa Dukey - Bang-a',
          details: {
            husband: ''
          }
        },
        {
          name: 'Salvador Cortez',
          details: {
            wife: ''
          },
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
          details: {
            husband: ''
          },
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
      triggerOn: 'mousemove',
      formatter: function (params: any) {
        if (!params.data.details) return ''

        const details = params.data.details

        if (Object.prototype.hasOwnProperty.call(details, 'wife')) {
          return `Wife: ${details.wife}`
        } else if (Object.prototype.hasOwnProperty.call(details, 'husband'))
          return `Husband: ${details.husband}`
        return '-'
      }
    },
    toolbox: {
      itemSize: 20,
      feature: {
        saveAsImage: {
          type: 'png',
          // type: 'svg',
          name: 'Pilagan-Dukey_Genealogy',
          backgroundColor: '#ffffff',
          show: true
        },
        dataZoom: {
          show: true
        },
        dataView: {
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
        symbolSize: 18,
        edgeShape: 'polyline',
        edgeForkPosition: '63%',
        lineStyle: {
          color: '#777777'
        },
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 25,
          fontWeight: '600'
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
        animationDuration: 200,
        animationDurationUpdate: 200
      }
    ]
  }
})

onMounted(() => {
  // const treeChart = echarts.init(document.getElementById('main'), null, { renderer: 'svg' })
  const treeChart = echarts.init(document.getElementById('main'))

  // Display the chart using the configuration items and data just specified.
  treeChart.setOption(chartOption.value)

  window.addEventListener('resize', function () {
    treeChart.resize()
  })

  setTimeout(() => {
    const main = document.getElementById('main')
    main?.scrollIntoView({ block: 'center' })

    const scrollHeight = main?.scrollHeight as number
    const scrollWidth = main?.scrollWidth as number

    window.scrollTo({
      top: scrollHeight / 0,
      left: scrollWidth / 2
    })
  }, 700)
})
</script>

<template>
  <main>
    <a :href="imgUrl" target="_blank" class="link">View as image</a>
    <div id="main" style="width: 800rem; height: 500rem; background: #ffffff"></div>
  </main>
</template>

<style scoped>
.link {
  position: fixed;
  left: 1rem;
  top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  z-index: 999;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: #7eec8f;
  color: #000;
}
</style>
